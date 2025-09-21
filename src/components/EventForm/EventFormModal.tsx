import * as React from "react";
import { createRoot, Root } from "react-dom/client";
import { Modal } from "obsidian";
import YearlyGlancePlugin from "@/src/main";
import { YearlyGlanceConfig } from "@/src/type/Config";
import {
	Birthday,
	CustomEvent,
	Events,
	EventType,
	Holiday,
	FilesEvent,
	TasksEvent,
} from "@/src/type/Events";
import { EventForm } from "./EventForm";
import { EventCalculator } from "@/src/utils/eventCalculator";
import "./style/EventFormModal.css";

export interface EventFormModalProps {
	date?: string; // 可选的日期属性
}

export class EventFormModal extends Modal {
	root: Root | null = null;
	plugin: YearlyGlancePlugin;
	event: Partial<CustomEvent | Birthday | Holiday>;
	eventType: EventType;
	isEditing: boolean;
	allowTypeChange: boolean;
	settings: YearlyGlanceConfig;
	props: EventFormModalProps;

	constructor(
		plugin: YearlyGlancePlugin,
		event: Partial<CustomEvent | Birthday | Holiday>,
		eventType: EventType,
		isEditing: boolean,
		allowTypeChange: boolean,
		props: EventFormModalProps = {}
	) {
		super(plugin.app);
		this.plugin = plugin;
		this.event = event;
		this.eventType = eventType;
		this.isEditing = isEditing;
		this.allowTypeChange = allowTypeChange;
		this.settings = plugin.getSettings();
		this.props = props;
	}

	onOpen(): void {
		const { contentEl } = this;
		contentEl.empty();

		// 创建 React 根元素
		this.root = createRoot(contentEl);

		// 渲染 EventForm 组件
		this.root.render(
			<React.StrictMode>
				<EventForm
					event={this.event}
					eventType={this.eventType}
					isEditing={this.isEditing}
					allowTypeChange={this.allowTypeChange}
					settings={this.settings}
					onSave={this.onSave.bind(this)}
					onCancel={() => this.close()}
					props={this.props}
				/>
			</React.StrictMode>
		);
	}

	onClose(): void {
		super.onClose();
		setTimeout(() => {
			this.root?.unmount();
			this.contentEl.empty();
		});
	}

	async onSave(
		event: CustomEvent | Birthday | Holiday | FilesEvent | TasksEvent,
		eventType: EventType
	) {
		const events: Events = this.plugin.getData();
		const newEvents = { ...events };
		const currentYear = this.plugin.getConfig().year;

		// 确保数组存在
		if (!newEvents.customEvents) newEvents.customEvents = [];
		if (!newEvents.birthdays) newEvents.birthdays = [];
		if (!newEvents.holidays) newEvents.holidays = [];
		if (!newEvents.files) newEvents.files = [];
		if (!newEvents.tasks) newEvents.tasks = [];

		// 根据事件类型进行不同的处理
		switch (eventType) {
			case "customEvent": {
				// 计算并更新自定义事件的完整信息
				event = EventCalculator.updateCustomEventInfo(
					event as CustomEvent,
					currentYear
				);
				// 编辑模式,更新现有事件; 新增模式,添加新事件
				if (this.isEditing) {
					newEvents.customEvents = newEvents.customEvents.map((c) =>
						c.id === event.id ? (event as CustomEvent) : c
					);
				} else {
					newEvents.customEvents.push(event as CustomEvent);
				}
				break;
			}
			case "birthday": {
				// 计算并更新生日的完整信息
				event = EventCalculator.updateBirthdayInfo(
					event as Birthday,
					currentYear
				);
				if (this.isEditing) {
					newEvents.birthdays = newEvents.birthdays.map((b) =>
						b.id === event.id ? (event as Birthday) : b
					);
				} else {
					newEvents.birthdays.push(event as Birthday);
				}
				break;
			}
			case "holiday": {
				// 计算并更新节日的完整信息
				event = EventCalculator.updateHolidayInfo(
					event as Holiday,
					currentYear
				);
				if (this.isEditing) {
					newEvents.holidays = newEvents.holidays.map((h) =>
						h.id === event.id ? (event as Holiday) : h
					);
				} else {
					newEvents.holidays.push(event as Holiday);
				}
				break;
			}
			case "files":{newEvents.files.push(event as FilesEvent);}
			case "tasks":{newEvents.tasks.push(event as TasksEvent);}
			default: {
				throw new Error(`Unsupported event type: ${eventType}`);
			}
		}

		await this.plugin.updateData(newEvents);
		this.close();
	}
}
