// 插件设置接口
export interface YearlyGlanceSettings {
    year: number;
    layout: string;
    viewType: string;
    showWeekdays: boolean;
    highlightToday: boolean;
    highlightWeekends: boolean;
    showLegend: boolean;
    holidays: Holiday[];
    birthdays: Birthday[];
    customEvents: CustomEvent[];
    limitListHeight: boolean;
    eventFontSize: string;
    showHolidays: boolean;
    showBirthdays: boolean;
    showCustomEvents: boolean;
    mondayFirst: boolean;
    title: string | null;
    showTooltips: boolean;
    colorful: boolean;
}

// 默认设置
export const DEFAULT_SETTINGS: YearlyGlanceSettings = {
    year: new Date().getFullYear(),
    layout: "4x3",
    viewType: "calendar",
    showWeekdays: true,
    highlightToday: true,
    highlightWeekends: true,
    showLegend: true,
    holidays: [],
    birthdays: [],
    customEvents: [],
    limitListHeight: true,
    eventFontSize: "medium",
    showHolidays: true,
    showBirthdays: true,
    showCustomEvents: true,
    mondayFirst: true,
    title: null,
    showTooltips: true,
    colorful: false
};

// 事件类型接口
export interface EventType {
    emoji: string;
    color: string;
}

// 事件类型配置
export const DEFAULT_EVENT_TYPES: Record<string, EventType> = {
    holiday: {
        emoji: "🎉",
        color: "#ff7875"
    },
    birthday: {
        emoji: "🎂",
        color: "#fa8c16"
    },
    custom: {
        emoji: "📌",
        color: "#73d13d"
    }
};

// 节日接口
export interface Holiday {
    date: string;
    text: string;
    emoji?: string;
    color?: string;
}

// 生日接口
export interface Birthday {
    date: string;
    text: string;
    emoji?: string;
    color?: string;
}

// 自定义事件接口
export interface CustomEvent {
    date: string;
    text: string;
    emoji?: string;
    color?: string;
}

// 事件接口
export interface Event {
    type: string;
    text: string;
    emoji: string;
    color: string;
}
