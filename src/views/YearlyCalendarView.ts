import { Event, EventType } from '../models/types';

export class YearlyCalendarView {
    private container: HTMLElement;
    private events: Record<string, Event[]>;
    private monthNames: string[] = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
    private monthColors: string[] = [
        "#e74c3c", // 一月 - 红色
        "#e67e22", // 二月 - 橙色
        "#f1c40f", // 三月 - 黄色
        "#2ecc71", // 四月 - 绿色
        "#1abc9c", // 五月 - 青绿色
        "#3498db", // 六月 - 蓝色
        "#9b59b6", // 七月 - 紫色
        "#e84393", // 八月 - 粉色
        "#fd79a8", // 九月 - 浅粉色
        "#fdcb6e", // 十月 - 浅黄色
        "#00cec9", // 十一月 - 青色
        "#6c5ce7"  // 十二月 - 靛蓝色
    ];

    constructor(
        private year: number,
        private layout: string = "4x3",
        private viewType: string = "calendar",
        private showWeekdays: boolean = true,
        private highlightToday: boolean = true,
        private highlightWeekends: boolean = true,
        private showLegend: boolean = true,
        private limitListHeight: boolean = true,
        private eventFontSize: string = "medium",
        private showHolidays: boolean = true,
        private showBirthdays: boolean = true,
        private showCustomEvents: boolean = true,
        private mondayFirst: boolean = true,
        private title: string | null = null,
        private showTooltips: boolean = true,
        private colorful: boolean = false,
        private eventTypes: Record<string, EventType> = {}
    ) {
        this.events = {};
    }

    // 将十六进制颜色转换为RGB
    private hexToRgb(hex: string): string {
        // 移除 # 号
        hex = hex.replace('#', '');
        
        // 解析RGB值
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        
        return `${r}, ${g}, ${b}`;
    }

    // 设置容器元素
    public setContainer(container: HTMLElement): void {
        this.container = container;
    }

    // 添加节日
    public addHolidays(holidays: Array<{date: string, text: string, emoji?: string, color?: string}>): void {
        holidays.forEach(holiday => {
            const date = holiday.date;
            if (!this.events[date]) this.events[date] = [];
            
            this.events[date].push({
                type: 'holiday',
                text: holiday.text,
                emoji: holiday.emoji || this.eventTypes.holiday.emoji,
                color: holiday.color || this.eventTypes.holiday.color
            });
        });
    }

    // 添加生日
    public addBirthdays(birthdays: Array<{date: string, text: string, emoji?: string, color?: string}>): void {
        birthdays.forEach(birthday => {
            let date = birthday.date;
            
            // 检查是否只提供了月日（格式如 "MM.DD" 或 "M.D"）
            if (/^\d{1,2}\.\d{1,2}$/.test(date)) {
                // 只提供了月日，自动补上年份
                const [month, day] = date.split('.');
                // 确保月和日都是两位数
                const monthStr = month.padStart(2, '0');
                const dayStr = day.padStart(2, '0');
                date = `${this.year}.${monthStr}.${dayStr}`;
            }
            
            if (!this.events[date]) this.events[date] = [];
            
            this.events[date].push({
                type: 'birthday',
                text: birthday.text,
                emoji: birthday.emoji || this.eventTypes.birthday.emoji,
                color: birthday.color || this.eventTypes.birthday.color
            });
        });
    }

    // 添加自定义事件
    public addCustomEvents(customEvents: Array<{date: string, text: string, emoji?: string, color?: string}>): void {
        customEvents.forEach(event => {
            const date = event.date;
            if (!this.events[date]) this.events[date] = [];
            
            this.events[date].push({
                type: 'custom',
                text: event.text,
                emoji: event.emoji || this.eventTypes.custom.emoji,
                color: event.color || this.eventTypes.custom.color
            });
        });
    }

    // 渲染图例
    private renderLegend(): string {
        let html = `<div class="event-legend">`;
        
        // 只显示有事件的类型
        if (Object.values(this.events).some(events => events.some(e => e.type === 'holiday')) && this.showHolidays) {
            html += `<div class="legend-item">
                <span class="legend-icon" style="background-color:${this.eventTypes.holiday.color}20; color:${this.eventTypes.holiday.color}">
                    ${this.eventTypes.holiday.emoji}
                </span> 节日
            </div>`;
        }
        
        if (Object.values(this.events).some(events => events.some(e => e.type === 'birthday')) && this.showBirthdays) {
            html += `<div class="legend-item">
                <span class="legend-icon" style="background-color:${this.eventTypes.birthday.color}20; color:${this.eventTypes.birthday.color}">
                    ${this.eventTypes.birthday.emoji}
                </span> 生日
            </div>`;
        }
        
        if (Object.values(this.events).some(events => events.some(e => e.type === 'custom')) && this.showCustomEvents) {
            html += `<div class="legend-item">
                <span class="legend-icon" style="background-color:${this.eventTypes.custom.color}20; color:${this.eventTypes.custom.color}">
                    ${this.eventTypes.custom.emoji}
                </span> 自定义事件
            </div>`;
        }
        
        html += `</div>`;
        return html;
    }

    // 渲染星期几标题
    private renderWeekdays(): string {
        // 定义星期几的名称
        const weekdays = this.mondayFirst ? ["一", "二", "三", "四", "五", "六", "日"] : ["日", "一", "二", "三", "四", "五", "六"];
        
        let html = `<div class="weekdays">`;
        for (let i = 0; i < 7; i++) {
            // 判断是否是周末
            const isWeekend = this.mondayFirst ? 
                (i === 5 || i === 6) :  // 周一为第一天时，周六日是第6、7天
                (i === 0 || i === 6);   // 周日为第一天时，周六日是第1、7天
            
            html += `<div class="weekday${isWeekend ? ' weekend' : ''}">${weekdays[i]}</div>`;
        }
        html += `</div>`;
        return html;
    }

    // 渲染单个月份
    private renderMonth(monthIndex: number): string {
        const month = monthIndex + 1;
        const monthStr = month < 10 ? `0${month}` : `${month}`;
        
        // 获取该月的天数
        const daysInMonth = new Date(this.year, month, 0).getDate();
        
        // 获取该月第一天是星期几 (0-6, 0是星期日)
        let firstDayOfMonth = new Date(this.year, monthIndex, 1).getDay();
        
        // 如果配置了周一为一周的第一天，调整星期几的值
        if (this.mondayFirst) {
            // 将星期日从0调整为6，其他天减1
            firstDayOfMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
        }
        
        // 获取字体大小类名
        const fontSizeClass = ` font-${this.eventFontSize || "medium"}`;
        
        // 检查是否是当前月份
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();
        const isCurrentMonth = (this.year === currentYear && monthIndex === currentMonth);
        
        // 获取月份主题色
        const monthColor = this.colorful ? this.monthColors[monthIndex] : '';
        const monthColorRgb = this.colorful ? this.hexToRgb(this.monthColors[monthIndex]) : '';
        const monthStyle = this.colorful ? 
            `style="--month-color: ${monthColor}; --month-color-rgb: ${monthColorRgb};"` : '';
        
        let html = `
        <div class="month-container${this.colorful ? ' colorful-month' : ''}" ${monthStyle}>
            <div class="month-header${isCurrentMonth ? ' current-month' : ''}">${this.monthNames[monthIndex]}</div>`;
        
        // 确定视图类型：优先使用 viewType 配置，如果未设置则根据布局判断
        const useListView = this.viewType === "list" || 
                           (this.viewType === "calendar" ? false : 
                           (this.layout === "2x6" || this.layout === "1x12"));
        
        if (useListView) {
            // 列表视图 - 每天一行
            // 根据配置决定是否限制高度
            const heightClass = this.limitListHeight ? "" : " no-height-limit";
            html += `<div class="month-days-list${heightClass}">`;
            
            // 获取当前日期
            const now = new Date();
            const currentYear = now.getFullYear();
            const currentMonth = now.getMonth() + 1;
            const currentDay = now.getDate();
            
            // 添加日期
            for (let day = 1; day <= daysInMonth; day++) {
                const dayStr = day < 10 ? `0${day}` : `${day}`;
                const dateKey = `${this.year}.${monthStr}.${dayStr}`;
                
                // 检查该日期是否有事件
                const dayEvents = this.events[dateKey] || [];
                const hasEvents = dayEvents.length > 0;
                
                // 检查是否是今天
                const isToday = this.highlightToday && 
                                (this.year === currentYear && monthIndex === currentMonth - 1 && day === currentDay);
                
                // 检查是否是周末
                const dayOfWeek = new Date(this.year, monthIndex, day).getDay();
                let isWeekend = false;
                if (this.highlightWeekends) {
                    // 无论 mondayFirst 如何设置，周六(6)和周日(0)始终是周末
                    isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
                }
                
                // 获取星期几的中文名称
                const weekdayNames = this.mondayFirst ? ["一", "二", "三", "四", "五", "六", "日"] : ["日", "一", "二", "三", "四", "五", "六"];
                let weekdayIndex = dayOfWeek;
                if (this.mondayFirst) {
                    // 如果周一是第一天，需要将星期日从0调整为6，其他天减1
                    weekdayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
                }
                const weekdayName = weekdayNames[weekdayIndex];
                
                html += `<div class="day-row${hasEvents ? ' has-events' : ''}${isToday ? ' today' : ''}${isWeekend ? ' weekend' : ''}">
                    <div class="day-info">
                        <span class="day-number">${day}</span>
                        <span class="weekday-name">周${weekdayName}</span>
                    </div>`;
                
                if (hasEvents) {
                    html += `<div class="events-list">`;
                    dayEvents.forEach(event => {
                        if ((event.type === 'holiday' && this.showHolidays) ||
                            (event.type === 'birthday' && this.showBirthdays) ||
                            (event.type === 'custom' && this.showCustomEvents)) {
                            html += `<div class="event${fontSizeClass}" style="background-color: ${event.color}20; color: ${event.color};" title="${event.text}" data-text="${event.text}">
                                <span class="event-emoji">${event.emoji}</span> ${event.text}
                            </div>`;
                        }
                    });
                    html += `</div>`;
                }
                
                html += `</div>`;
            }
            
            html += `</div>`;
        } else {
            // 传统周历视图
            if (this.showWeekdays) {
                html += this.renderWeekdays();
            }
            
            html += `<div class="month-days">`;
            
            // 添加月初的空白格子
            for (let i = 0; i < firstDayOfMonth; i++) {
                html += `<div class="day empty"></div>`;
            }
            
            // 获取当前日期
            const now = new Date();
            const currentYear = now.getFullYear();
            const currentMonth = now.getMonth() + 1;
            const currentDay = now.getDate();
            
            // 添加日期
            for (let day = 1; day <= daysInMonth; day++) {
                const dayStr = day < 10 ? `0${day}` : `${day}`;
                const dateKey = `${this.year}.${monthStr}.${dayStr}`;
                
                // 检查该日期是否有事件
                const dayEvents = this.events[dateKey] || [];
                const hasEvents = dayEvents.length > 0;
                
                // 检查是否是今天
                const isToday = this.highlightToday && 
                                (this.year === currentYear && monthIndex === currentMonth - 1 && day === currentDay);
                
                // 检查是否是周末
                const dayOfWeek = new Date(this.year, monthIndex, day).getDay();
                let isWeekend = false;
                if (this.highlightWeekends) {
                    // 无论 mondayFirst 如何设置，周六(6)和周日(0)始终是周末
                    isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
                }
                
                html += `<div class="day${hasEvents ? ' has-events' : ''}${isToday ? ' today' : ''}${isWeekend ? ' weekend' : ''}">
                    <div class="day-number">${day}</div>`;
                
                if (hasEvents) {
                    html += `<div class="events">`;
                    dayEvents.forEach(event => {
                        if ((event.type === 'holiday' && this.showHolidays) ||
                            (event.type === 'birthday' && this.showBirthdays) ||
                            (event.type === 'custom' && this.showCustomEvents)) {
                            html += `<div class="event${fontSizeClass}" style="background-color: ${event.color}20; color: ${event.color};" title="${event.text}" data-text="${event.text}">
                                <span class="event-emoji">${event.emoji}</span> ${event.text}
                            </div>`;
                        }
                    });
                    html += `</div>`;
                }
                
                html += `</div>`;
            }
            
            html += `</div>`;
        }
        
        html += `</div>`;
        
        return html;
    }

    // 生成HTML
    public render(): string {
        // 根据布局确定行数和列数
        let rows, cols;
        switch (this.layout) {
            case "6x2":
                rows = 6;
                cols = 2;
                break;
            case "3x4":
                rows = 3;
                cols = 4;
                break;
            case "2x6":
                rows = 2;
                cols = 6;
                break;
            case "1x12":
                rows = 1;
                cols = 12;
                break;
            default: // "4x3"
                rows = 4;
                cols = 3;
                break;
        }
        
        // 生成HTML
        let html = `<div class="yearly-calendar">`;
        
        // 处理标题
        if (this.title !== '') {
            const titleText = this.title === null ? `${this.year}年 年历` : this.title;
            html += `<h1>${titleText}</h1>`;
        }
        
        // 添加图例
        if (this.showLegend) {
            html += this.renderLegend();
        }
        
        html += `<div class="calendar-grid layout-${this.layout}">`;
        
        // 生成月份表格
        for (let row = 0; row < rows; row++) {
            html += `<div class="month-row">`;
            for (let col = 0; col < cols; col++) {
                const monthIndex = row * cols + col;
                if (monthIndex < 12) {
                    html += this.renderMonth(monthIndex);
                }
            }
            html += `</div>`;
        }
        
        html += `</div></div>`;
        
        return html;
    }

    // 设置事件悬浮效果
    public setupEventHoverEffects(): void {
        if (this.showTooltips && this.container) {
            // 获取所有事件元素
            const eventElements = this.container.querySelectorAll('.event');
            
            // 清除所有可能存在的悬浮提示
            this.clearAllTooltips();
            
            // 为每个事件元素添加鼠标悬浮事件
            eventElements.forEach(event => {
                // 鼠标进入事件
                event.addEventListener('mouseenter', (e) => {
                    // 确保先清除所有其他悬浮提示
                    this.clearAllTooltips();
                    
                    const text = event.getAttribute('data-text') || '';
                    const rect = event.getBoundingClientRect();
                    
                    // 创建悬浮提示元素
                    const tooltip = document.createElement('div');
                    tooltip.className = 'event-tooltip';
                    tooltip.id = 'event-tooltip-' + Date.now(); // 添加唯一ID
                    tooltip.textContent = text;
                    
                    // 获取背景色和文字颜色，并确保背景色不透明
                    const bgColor = (event as HTMLElement).style.backgroundColor;
                    const textColor = (event as HTMLElement).style.color;
                    
                    // 将半透明背景色转换为不透明背景色
                    let opaqueColor = bgColor;
                    if (bgColor.includes('rgba')) {
                        // 将 rgba(r,g,b,0.x) 转换为 rgb(r,g,b)
                        opaqueColor = bgColor.replace(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/, 'rgb($1, $2, $3)');
                    } else if (bgColor.endsWith('20')) {
                        // 处理十六进制颜色加透明度的情况
                        opaqueColor = bgColor.substring(0, bgColor.length - 2);
                    }
                    
                    // 设置不透明的背景色
                    tooltip.style.backgroundColor = opaqueColor;
                    tooltip.style.color = textColor;
                    
                    // 设置悬浮提示位置
                    tooltip.style.position = 'fixed';
                    tooltip.style.left = `${rect.left}px`;
                    tooltip.style.top = `${rect.top - 30}px`;
                    tooltip.style.zIndex = '1000';
                    tooltip.style.padding = '4px 8px';
                    tooltip.style.borderRadius = '4px';
                    tooltip.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
                    tooltip.style.whiteSpace = 'nowrap';
                    tooltip.style.color = "white";
                    
                    // 将悬浮提示添加到文档中
                    document.body.appendChild(tooltip);
                    
                    // 存储悬浮提示元素引用
                    (event as any)._tooltip = tooltip;
                    
                    // 为文档添加点击事件，点击其他地方时移除悬浮提示
                    document.addEventListener('click', this.handleDocumentClick);
                });
                
                // 鼠标离开事件
                event.addEventListener('mouseleave', (e) => {
                    // 延迟移除悬浮提示，避免鼠标快速移动时提示闪烁
                    setTimeout(() => {
                        this.clearTooltip(event as HTMLElement);
                    }, 100);
                });
            });
        }
    }

    // 清除特定事件的悬浮提示
    private clearTooltip(event: HTMLElement): void {
        if (event && (event as any)._tooltip) {
            try {
                document.body.removeChild((event as any)._tooltip);
            } catch (e) {
                console.log('移除悬浮提示失败，可能已被移除');
            }
            (event as any)._tooltip = null;
        }
    }

    // 清除所有悬浮提示
    private clearAllTooltips(): void {
        // 移除所有带有 event-tooltip 类的元素
        const tooltips = document.querySelectorAll('.event-tooltip');
        tooltips.forEach(tooltip => {
            try {
                document.body.removeChild(tooltip);
            } catch (e) {
                console.log('移除悬浮提示失败，可能已被移除');
            }
        });
    }

    // 处理文档点击事件
    private handleDocumentClick = (): void => {
        this.clearAllTooltips();
        // 移除事件监听器，避免多次添加
        document.removeEventListener('click', this.handleDocumentClick);
    }
}
