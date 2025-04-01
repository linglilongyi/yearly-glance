import { App, PluginSettingTab, Setting } from 'obsidian';
import YearlyGlancePlugin from '../main';

export class YearlyGlanceSettingsTab extends PluginSettingTab {
    plugin: YearlyGlancePlugin;

    constructor(app: App, plugin: YearlyGlancePlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;
        containerEl.empty();

        containerEl.createEl('h2', { text: '年度概览设置' });

        // 基本设置
        containerEl.createEl('h3', { text: '基本设置' });

        new Setting(containerEl)
            .setName('年份')
            .setDesc('显示的年份')
            .addText(text => text
                .setValue(this.plugin.settings.year.toString())
                .onChange(async (value) => {
                    const year = parseInt(value);
                    if (!isNaN(year) && year > 0) {
                        this.plugin.settings.year = year;
                        await this.plugin.saveSettings();
                    }
                }));

        new Setting(containerEl)
            .setName('布局')
            .setDesc('月历的排列方式')
            .addDropdown(dropdown => dropdown
                .addOption('4x3', '4行3列 (默认)')
                .addOption('6x2', '6行2列')
                .addOption('3x4', '3行4列')
                .addOption('2x6', '2行6列')
                .addOption('1x12', '1行12列')
                .setValue(this.plugin.settings.layout)
                .onChange(async (value) => {
                    this.plugin.settings.layout = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('视图类型')
            .setDesc('选择日历显示方式')
            .addDropdown(dropdown => dropdown
                .addOption('calendar', '传统日历视图')
                .addOption('list', '列表视图')
                .setValue(this.plugin.settings.viewType)
                .onChange(async (value) => {
                    this.plugin.settings.viewType = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('自定义标题')
            .setDesc('自定义年历标题，留空则使用默认标题')
            .addText(text => text
                .setValue(this.plugin.settings.title || '')
                .onChange(async (value) => {
                    this.plugin.settings.title = value || null;
                    await this.plugin.saveSettings();
                }));

        // 显示选项
        containerEl.createEl('h3', { text: '显示选项' });

        new Setting(containerEl)
            .setName('显示星期几')
            .setDesc('在日历视图中显示星期几')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.showWeekdays)
                .onChange(async (value) => {
                    this.plugin.settings.showWeekdays = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('高亮今天')
            .setDesc('在日历中高亮显示今天')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.highlightToday)
                .onChange(async (value) => {
                    this.plugin.settings.highlightToday = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('高亮周末')
            .setDesc('在日历中高亮显示周末')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.highlightWeekends)
                .onChange(async (value) => {
                    this.plugin.settings.highlightWeekends = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('显示图例')
            .setDesc('显示事件类型图例')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.showLegend)
                .onChange(async (value) => {
                    this.plugin.settings.showLegend = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('限制列表高度')
            .setDesc('在列表视图中限制每个月的高度')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.limitListHeight)
                .onChange(async (value) => {
                    this.plugin.settings.limitListHeight = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('事件文本大小')
            .setDesc('设置事件文本的字体大小')
            .addDropdown(dropdown => dropdown
                .addOption('small', '小')
                .addOption('medium', '中')
                .addOption('large', '大')
                .setValue(this.plugin.settings.eventFontSize)
                .onChange(async (value) => {
                    this.plugin.settings.eventFontSize = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('周一作为一周的第一天')
            .setDesc('设置周一（而不是周日）作为一周的第一天')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.mondayFirst)
                .onChange(async (value) => {
                    this.plugin.settings.mondayFirst = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('显示事件悬浮提示')
            .setDesc('鼠标悬停在事件上时显示完整内容')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.showTooltips)
                .onChange(async (value) => {
                    this.plugin.settings.showTooltips = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('彩色主题')
            .setDesc('为每个月使用不同的主题色')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.colorful)
                .onChange(async (value) => {
                    this.plugin.settings.colorful = value;
                    await this.plugin.saveSettings();
                }));

        // 事件类型显示
        containerEl.createEl('h3', { text: '事件类型显示' });

        new Setting(containerEl)
            .setName('显示节日')
            .setDesc('在日历中显示节日')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.showHolidays)
                .onChange(async (value) => {
                    this.plugin.settings.showHolidays = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('显示生日')
            .setDesc('在日历中显示生日')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.showBirthdays)
                .onChange(async (value) => {
                    this.plugin.settings.showBirthdays = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('显示自定义事件')
            .setDesc('在日历中显示自定义事件')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.showCustomEvents)
                .onChange(async (value) => {
                    this.plugin.settings.showCustomEvents = value;
                    await this.plugin.saveSettings();
                }));

        // 事件管理
        containerEl.createEl('h3', { text: '事件管理' });
        
        // 这里可以添加节日、生日和自定义事件的管理界面
        // 由于这部分比较复杂，可以考虑在插件中使用单独的模态框来管理
        
        containerEl.createEl('p', { 
            text: '事件管理功能可以通过命令面板或工具栏按钮打开专门的编辑器。' 
        });
    }
}
