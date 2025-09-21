import * as React from "react";
import YearlyGlancePlugin from "@/src/main";
import { CalendarDay, CalendarEvent } from "@/src/type/CalendarEvent";
import { useYearlyGlanceConfig } from "@/src/hooks/useYearlyGlanceConfig";
import { LunarLibrary } from "@/src/utils/lunarLibrary";
import { IsoUtils } from "@/src/utils/isoUtils";
import { getFileEvents, getTasksEvents } from "@/src/utils/eventFromOB";
import { t } from "@/src/i18n/i18n";
import { FilesEvent, TasksEvent } from "@/src/type/Events";

export const MonthMap: Array<{ name: string; color: string }> = [
	{
		name: t("data.month.jan"),
		color: hexToRgb("#e74c3c"), // 红色
	},
	{
		name: t("data.month.feb"),
		color: hexToRgb("#e67e22"), // 橙色
	},
	{
		name: t("data.month.mar"),
		color: hexToRgb("#f1c40f"), // 黄色
	},
	{
		name: t("data.month.apr"),
		color: hexToRgb("#2ecc71"), // 绿色
	},
	{
		name: t("data.month.may"),
		color: hexToRgb("#1abc9c"), // 青绿色
	},
	{
		name: t("data.month.jun"),
		color: hexToRgb("#3498db"), // 蓝色
	},
	{
		name: t("data.month.jul"),
		color: hexToRgb("#9b59b6"), // 紫色
	},
	{
		name: t("data.month.aug"),
		color: hexToRgb("#e84393"), // 粉色
	},
	{
		name: t("data.month.sep"),
		color: hexToRgb("#fd79a8"), // 浅粉色
	},
	{
		name: t("data.month.oct"),
		color: hexToRgb("#fdcb6e"), // 浅黄色
	},
	{
		name: t("data.month.nov"),
		color: hexToRgb("#00cec9"), // 青色
	},
	{
		name: t("data.month.dec"),
		color: hexToRgb("#6c5ce7"), // 靛蓝色
	},
];

export const WeekMap: Record<string, string[]> = {
	sundayFirst: [
		t("data.week.sun"),
		t("data.week.mon"),
		t("data.week.tue"),
		t("data.week.wed"),
		t("data.week.thu"),
		t("data.week.fri"),
		t("data.week.sat"),
	],
	mondayFirst: [
		t("data.week.mon"),
		t("data.week.tue"),
		t("data.week.wed"),
		t("data.week.thu"),
		t("data.week.fri"),
		t("data.week.sat"),
		t("data.week.sun"),
	],
};

function hexToRgb(hex: string): string {
	// 移除 # 号
	hex = hex.replace("#", "");

	// 解析RGB值
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	return `${r}, ${g}, ${b}`;
}

// 主要 Hook
export function useYearlyCalendar(plugin: YearlyGlancePlugin) {
	const { config, events } = useYearlyGlanceConfig(plugin);
	const App = plugin.app;
	const {
		year,
		highlightWeekends,
		highlightToday,
		mondayFirst,
		showHolidays,
		showBirthdays,
		showCustomEvents,
		showTasks,
        showFiles,
		eventFolder,
		fileDateProperty,
	} = config;

    const { holidays, birthdays, customEvents } = events;

    const [tasksEvents, setTasksEvents] = React.useState<TasksEvent[]>([]);
    const [fileEvents, setFileEvents] = React.useState<FilesEvent[]>([]);

	React.useEffect(() => {
		const fetchTasksEvents = async () => {
			if (showTasks) {
				try {
					const tasksEvents = await getTasksEvents(App, eventFolder);
					setTasksEvents(tasksEvents);
				} catch (error) {
					console.error("Failed to fetch tasks events:", error);
				}
			}
		};

		fetchTasksEvents();
	}, [showTasks, eventFolder, App]);

	React.useEffect(() => {
		const fetchFileEvents = async () => {
			if (showFiles) {
				try {
					const filesEvents = await getFileEvents(App, eventFolder, fileDateProperty);
					setFileEvents(filesEvents);
				} catch (error) {
					console.error("Failed to fetch file events:", error);
				}
			}
		};

		fetchFileEvents();
	}, [showFiles, eventFolder, fileDateProperty, App]);

	// 当前日期 - 使用时区安全的方法
	const today = React.useMemo(() => new Date(), []);

	// 处理所有事件
	const allEvents = React.useMemo(() => {
		const events: CalendarEvent[] = [];

		// 处理节假日
		if (showHolidays) {
			holidays.forEach((holiday) => {
				if (!holiday.isHidden) {
					events.push({
						...holiday,
						eventType: "holiday",
					});
				}
			});
		}

		// 处理生日
		if (showBirthdays) {
			birthdays.forEach((birthday) => {
				if (!birthday.isHidden) {
					events.push({
						...birthday,
						eventType: "birthday",
					});
				}
			});
		}

		// 处理自定义事件
		if (showCustomEvents) {
			customEvents.forEach((customEvent) => {
				if (!customEvent.isHidden) {
					events.push({
						...customEvent,
						eventType: "customEvent",
					});
				}
			});
		}

        // 处理文件
        if (showFiles) {
            fileEvents.forEach((fileEvent) => {
                events.push({
                    ...fileEvent,
                    eventType: "files",
                });
            });
        }

        // 处理任务
        if (showTasks) {
            tasksEvents.forEach((taskEvent) => {
                events.push({
                    ...taskEvent,
                    eventType: "tasks",
                });
            });
        }

		return events;
	}, [config, events]);

	// 月份数据
	const monthsData = React.useMemo(() => {
		return MonthMap.map((month, monthIndex) => {
			// 当月第一天 - 使用时区安全的方法
			const firstDayOfMonth = IsoUtils.createLocalDate(
				year,
				monthIndex + 1,
				1
			);
			// 当月天数 - 使用时区安全的方法
			const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
			// 当月第一天是星期几 (0-6, 0是星期日)
			let firstDayWeekday = firstDayOfMonth.getDay();

			// 如果配置了周一为一周的第一天，调整星期几的值
			if (mondayFirst) {
				firstDayWeekday =
					firstDayWeekday === 0 ? 6 : firstDayWeekday - 1;
			}

			// 当月所有日期数据
			const days: CalendarDay[] = [];

			// 填充当月日期
			for (let i = 1; i <= daysInMonth; i++) {
				// 使用时区安全的日期构造方法
				const date = IsoUtils.createLocalDate(year, monthIndex + 1, i);
				const isWeekend =
					highlightWeekends &&
					(date.getDay() === 0 || date.getDay() === 6);

				// 使用 IsoUtils.toLocalDateString 生成当前日期的 ISO 字符串用于比较，避免时区问题
				const currentDateISO = IsoUtils.toLocalDateString(date);

				// 查找当天的事件
				const dayEvents = allEvents.filter((event) =>
					event.dateArr?.some((dateStr: string) => {
						// 直接比较 ISO 日期字符串，避免时区转换问题
						return dateStr === currentDateISO;
					})
				);

				days.push({
					date,
					dayOfMonth: i,
					dayOfLunarMonth: LunarLibrary.getDayOfLunarMonth(date),
					isCurrentMonth: true,
					isToday:
						highlightToday && IsoUtils.isSameLocalDay(date, today),
					isWeekend,
					events: dayEvents,
				});
			}

			return {
				name: month.name,
				color: month.color,
				days,
				isCurrentMonth:
					today.getMonth() === monthIndex &&
					today.getFullYear() === year,
				firstDayPosition: firstDayWeekday,
			};
		});
	}, [config, events, tasksEvents, fileEvents]);

	// 获取星期几标题
	const weekdays = React.useMemo(() => {
		return mondayFirst ? WeekMap.mondayFirst : WeekMap.sundayFirst;
	}, [mondayFirst]);

	return {
		monthsData,
		weekdays,
		today,
	};
}
