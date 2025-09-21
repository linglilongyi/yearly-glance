import { App, normalizePath,TFile, TFolder } from "obsidian";
import { FilesEvent, TasksEvent } from "../type/Events";
import { EventDate } from "../type/Date";
import { v4 as uuidv4 } from "uuid";
import { IsoUtils } from "./isoUtils";
import { YearlyGlanceSettings } from "src/type/Settings";

function getEventDate(dateStr: string): EventDate | null {
	const date = IsoUtils.fromLocalDateString(dateStr);
	if (!date) {
		return null;
	}
	return {
		isoDate: dateStr,
		calendar: "GREGORIAN",
		userInput: {
			input: dateStr,
		},
	};
}

export async function getFileEvents(
	app: App,
	eventFolder: string,
	fileDateProperty: YearlyGlanceSettings["fileDateProperty"]
): Promise<FilesEvent[]> {
	const folder = app.vault.getAbstractFileByPath(normalizePath(eventFolder));
	if (!(folder instanceof TFolder)) {
		return [];
	}

	const files = folder.children.filter(
		(file): file is TFile => file instanceof TFile
	);
	const fileEvents: FilesEvent[] = [];

	for (const file of files) {
		let dateStr: string | null = null;
		fileDateProperty = fileDateProperty || "ctime";
		const cache = this.app.metadataCache.getFileCache(file);  
		const frontmatter = cache?.frontmatter;  

		dateStr = frontmatter?.[fileDateProperty] || null;

		if (file&&dateStr) {
			const eventDate = getEventDate(dateStr);
			if (eventDate) {
				fileEvents.push({
					id: uuidv4(),
					text: file.basename,
					eventDate,
				});
			}
		}
	}
	return fileEvents;
}

export async function getTasksEvents(
	app: App,
	eventFolder: string
): Promise<TasksEvent[]> {
	const folder = app.vault.getAbstractFileByPath(normalizePath(eventFolder));
	if (!(folder instanceof TFolder)) {
		return [];
	}

	const files = folder.children.filter(
		(file): file is TFile => file instanceof TFile
	);

	const tasksEvents: TasksEvent[] = [];

	for (const file of files) {
		const cache = this.app.metadataCache.getFileCache(file);  
		const listItems = cache?.listItems;  
		const tasks = listItems.filter(item => item.task !== undefined);

		const fileContent = await this.app.vault.cachedRead(file);  
		const lines = fileContent.split('\n');  
  
		tasks.forEach(task => {  
    		const startLine = task.position.start.line;  
    		const endLine = task.position.end.line;  
      
    		// 获取任务的完整文本  
    		const taskText = lines.slice(startLine, endLine + 1).join('\n'); 
			const taskMatch = taskText.match(/- \[.\] (.*)📅(\d{4}-\d{2}-\d{2})/);
			if (taskMatch) {
				const text = taskMatch[1].trim();
				const dateStr = taskMatch[2];
				const eventDate = getEventDate(dateStr);
				if (eventDate) {
					tasksEvents.push({
						id: uuidv4(),
						text,
						eventDate,
					});
				}
			}
		});
	}
	return tasksEvents;
}
