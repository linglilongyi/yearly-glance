import { Plugin, WorkspaceLeaf, ItemView } from 'obsidian';
import { YearlyGlanceSettingsTab } from './views/SettingsTab';
import { YearlyCalendarView } from './views/YearlyCalendarView';
import { DEFAULT_EVENT_TYPES, DEFAULT_SETTINGS, EventType, YearlyGlanceSettings, Holiday, Birthday, CustomEvent } from './models/types';
import { EventListModal, EventModal } from './views/EventModal';
import '../style/styles.css';

// 定义视图类型
const VIEW_TYPE_YEARLY_GLANCE = 'yearly-glance-view';

// 扩展 ItemView 类型声明，添加 containerEl 属性
declare module 'obsidian' {
    interface ItemView {
        containerEl: HTMLElement;
    }
}

// 定义年历视图类
class YearlyGlanceView extends ItemView {
    private plugin: YearlyGlancePlugin;
    contentEl: HTMLElement;
    private calendarView: YearlyCalendarView;

    constructor(leaf: WorkspaceLeaf, plugin: YearlyGlancePlugin) {
        super(leaf);
        this.plugin = plugin;
        this.contentEl = document.createElement('div');
        this.contentEl.className = 'yearly-glance-container';
        
        this.calendarView = new YearlyCalendarView(
            plugin.settings.year,
            plugin.settings.layout,
            plugin.settings.viewType,
            plugin.settings.showWeekdays,
            plugin.settings.highlightToday,
            plugin.settings.highlightWeekends,
            plugin.settings.showLegend,
            plugin.settings.limitListHeight,
            plugin.settings.eventFontSize,
            plugin.settings.showHolidays,
            plugin.settings.showBirthdays,
            plugin.settings.showCustomEvents,
            plugin.settings.mondayFirst,
            plugin.settings.title,
            plugin.settings.showTooltips,
            plugin.settings.colorful,
            plugin.getEventTypes()
        );
    }

    getViewType(): string {
        return VIEW_TYPE_YEARLY_GLANCE;
    }

    getDisplayText(): string {
        return '年度概览';
    }

    getIcon(): string {
        return 'calendar-with-checkmark';
    }

    async onOpen(): Promise<void> {
        // 添加事件数据
        this.calendarView.addHolidays(this.plugin.settings.holidays);
        this.calendarView.addBirthdays(this.plugin.settings.birthdays);
        this.calendarView.addCustomEvents(this.plugin.settings.customEvents);

        // 渲染日历
        this.contentEl.innerHTML = this.calendarView.render();
        this.calendarView.setContainer(this.contentEl);
        this.calendarView.setupEventHoverEffects();
        
        // 将内容添加到视图中
        const contentContainer = this.containerEl.querySelector('.view-content');
        if (contentContainer) {
            contentContainer.appendChild(this.contentEl);
        } else {
            this.containerEl.appendChild(this.contentEl);
        }
    }

    async onClose(): Promise<void> {
        this.contentEl.innerHTML = '';
    }

    getContentEl(): HTMLElement {
        return this.contentEl;
    }
}

export default class YearlyGlancePlugin extends Plugin {
    settings: YearlyGlanceSettings;
    private eventTypes: Record<string, EventType>;

    async onload() {
        console.log('[yearly-glance] 加载年度概览插件');

        // 加载设置
        await this.loadSettings();

        // 初始化事件类型
        this.eventTypes = { ...DEFAULT_EVENT_TYPES };

        // 注册视图
        this.registerView(
            VIEW_TYPE_YEARLY_GLANCE,
            (leaf) => new YearlyGlanceView(leaf, this)
        );

        // 添加打开年历视图的命令
        this.addCommand({
            id: 'open-yearly-glance',
            name: '打开年度概览',
            callback: () => {
                this.activateView();
            }
        });

        // 添加打开节日管理的命令
        this.addCommand({
            id: 'manage-holidays',
            name: '管理节日',
            callback: () => {
                this.openEventManager('holiday');
            }
        });

        // 添加打开生日管理的命令
        this.addCommand({
            id: 'manage-birthdays',
            name: '管理生日',
            callback: () => {
                this.openEventManager('birthday');
            }
        });

        // 添加打开自定义事件管理的命令
        this.addCommand({
            id: 'manage-custom-events',
            name: '管理自定义事件',
            callback: () => {
                this.openEventManager('custom');
            }
        });

        // 添加刷新年历的命令
        this.addCommand({
            id: 'refresh-yearly-glance',
            name: '刷新年度概览',
            callback: () => {
                this.refreshView();
            }
        });

        // 添加设置选项卡
        this.addSettingTab(new YearlyGlanceSettingsTab(this.app, this));

        // 添加左侧栏图标
        this.addRibbonIcon('lucide-telescope', '年度概览', () => {
            this.activateView();
        });
    }

    onunload() {
        console.log('卸载年度概览插件');
        this.app.workspace.detachLeavesOfType(VIEW_TYPE_YEARLY_GLANCE);
    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
        this.refreshView();
    }

    getEventTypes(): Record<string, EventType> {
        return this.eventTypes;
    }

    // 激活年历视图
    async activateView() {
        // 检查是否已经有打开的视图
        const existingLeaves = this.app.workspace.getLeavesOfType(VIEW_TYPE_YEARLY_GLANCE);
        
        if (existingLeaves.length > 0) {
            // 如果已经有打开的视图，激活它
            this.app.workspace.revealLeaf(existingLeaves[0]);
        } else {
            // 否则创建新视图
            const leaf = this.app.workspace.getLeaf('tab');
            await leaf.setViewState({
                type: VIEW_TYPE_YEARLY_GLANCE,
                active: true
            });
            
            this.app.workspace.revealLeaf(leaf);
        }
    }

    // 刷新年历视图
    refreshView() {
        const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE_YEARLY_GLANCE);
        
        if (leaves.length > 0) {
            const view = leaves[0].view as YearlyGlanceView;
            const contentEl = view.getContentEl();
            
            // 重新创建视图
            contentEl.innerHTML = '';
            
            // 重新设置事件数据
            const calendarView = new YearlyCalendarView(
                this.settings.year,
                this.settings.layout,
                this.settings.viewType,
                this.settings.showWeekdays,
                this.settings.highlightToday,
                this.settings.highlightWeekends,
                this.settings.showLegend,
                this.settings.limitListHeight,
                this.settings.eventFontSize,
                this.settings.showHolidays,
                this.settings.showBirthdays,
                this.settings.showCustomEvents,
                this.settings.mondayFirst,
                this.settings.title,
                this.settings.showTooltips,
                this.settings.colorful,
                this.getEventTypes()
            );
            
            calendarView.addHolidays(this.settings.holidays);
            calendarView.addBirthdays(this.settings.birthdays);
            calendarView.addCustomEvents(this.settings.customEvents);
            
            // 重新渲染
            contentEl.innerHTML = calendarView.render();
            calendarView.setContainer(contentEl);
            calendarView.setupEventHoverEffects();
        }
    }

    // 打开事件管理器
    openEventManager(eventType: string) {
        let events: Holiday[] | Birthday[] | CustomEvent[] = [];
        
        switch (eventType) {
            case 'holiday':
                events = this.settings.holidays;
                break;
            case 'birthday':
                events = this.settings.birthdays;
                break;
            case 'custom':
                events = this.settings.customEvents;
                break;
        }
        
        // 打开事件列表模态框
        const modal = new EventListModal(
            this.app,
            this,
            eventType,
            events,
            (index) => {
                // 编辑事件
                this.openEventEditor(eventType, index);
            },
            async (index) => {
                // 删除事件
                events.splice(index, 1);
                await this.saveSettings();
                
                // 重新打开事件管理器
                this.openEventManager(eventType);
            },
            () => {
                // 添加事件
                this.openEventEditor(eventType);
            }
        );
        modal.open();
    }

    // 打开事件编辑器
    openEventEditor(eventType: string, index?: number) {
        let events: Holiday[] | Birthday[] | CustomEvent[] = [];
        let eventData: Holiday | Birthday | CustomEvent | null = null;
        
        switch (eventType) {
            case 'holiday':
                events = this.settings.holidays;
                break;
            case 'birthday':
                events = this.settings.birthdays;
                break;
            case 'custom':
                events = this.settings.customEvents;
                break;
        }
        
        // 如果提供了索引，说明是编辑模式
        if (index !== undefined) {
            eventData = events[index];
        }
        
        // 打开事件编辑模态框
        const modal = new EventModal(
            this.app,
            this,
            eventType,
            async (data) => {
                if (index !== undefined) {
                    // 更新现有事件
                    events[index] = data;
                } else {
                    // 添加新事件
                    events.push(data);
                }
                
                await this.saveSettings();
                
                // 重新打开事件管理器
                this.openEventManager(eventType);
            },
            eventData
        );
        modal.open();
    }
}
