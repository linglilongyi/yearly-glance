import { App, Modal, Setting, TextComponent } from 'obsidian';
import { Birthday, CustomEvent, Holiday } from '../models/types';
import YearlyGlancePlugin from '../main';

// 事件编辑模态框
export class EventModal extends Modal {
    private plugin: YearlyGlancePlugin;
    private eventType: string;
    private eventData: Holiday | Birthday | CustomEvent | null;
    private onSave: (data: Holiday | Birthday | CustomEvent) => void;
    private isEditMode: boolean;
    
    private dateInput: TextComponent;
    private textInput: TextComponent;
    private emojiInput: TextComponent;
    private colorInput: TextComponent;

    constructor(
        app: App, 
        plugin: YearlyGlancePlugin, 
        eventType: string, 
        onSave: (data: Holiday | Birthday | CustomEvent) => void,
        eventData: Holiday | Birthday | CustomEvent | null = null
    ) {
        super(app);
        this.plugin = plugin;
        this.eventType = eventType;
        this.onSave = onSave;
        this.eventData = eventData;
        this.isEditMode = !!eventData;
    }

    onOpen() {
        const { contentEl } = this;
        
        // 设置标题
        let title: string;
        switch (this.eventType) {
            case 'holiday':
                title = this.isEditMode ? '编辑节日' : '添加节日';
                break;
            case 'birthday':
                title = this.isEditMode ? '编辑生日' : '添加生日';
                break;
            case 'custom':
                title = this.isEditMode ? '编辑自定义事件' : '添加自定义事件';
                break;
            default:
                title = this.isEditMode ? '编辑事件' : '添加事件';
        }
        
        contentEl.createEl('h2', { text: title });
        
        // 日期输入
        new Setting(contentEl)
            .setName('日期')
            .setDesc('格式：YYYY.MM.DD 或 MM.DD（生日）')
            .addText(text => {
                this.dateInput = text;
                text.setValue(this.eventData?.date || '');
                if (this.eventType === 'birthday') {
                    text.setPlaceholder('例如：01.01 或 2025.01.01');
                } else {
                    text.setPlaceholder('例如：2025.01.01');
                }
            });
        
        // 文本输入
        new Setting(contentEl)
            .setName('内容')
            .setDesc('事件描述')
            .addText(text => {
                this.textInput = text;
                text.setValue(this.eventData?.text || '');
                text.setPlaceholder('事件描述');
            });
        
        // 表情符号输入
        new Setting(contentEl)
            .setName('表情符号')
            .setDesc('可选，留空则使用默认表情')
            .addText(text => {
                this.emojiInput = text;
                text.setValue(this.eventData?.emoji || '');
                text.setPlaceholder('例如：🎉');
            });
        
        // 颜色输入
        new Setting(contentEl)
            .setName('颜色')
            .setDesc('可选，留空则使用默认颜色')
            .addText(text => {
                this.colorInput = text;
                text.setValue(this.eventData?.color || '');
                text.setPlaceholder('例如：#ff0000');
                
                // 添加颜色选择器
                const input = text.inputEl;
                input.type = 'color';
                if (this.eventData?.color) {
                    input.value = this.eventData.color;
                } else {
                    // 设置默认颜色
                    switch (this.eventType) {
                        case 'holiday':
                            input.value = '#ff7875';
                            break;
                        case 'birthday':
                            input.value = '#fa8c16';
                            break;
                        case 'custom':
                            input.value = '#73d13d';
                            break;
                    }
                }
            });
        
        // 按钮
        const buttonContainer = contentEl.createDiv('button-container');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'flex-end';
        buttonContainer.style.marginTop = '20px';
        
        const cancelButton = buttonContainer.createEl('button', { text: '取消' });
        cancelButton.style.marginRight = '10px';
        cancelButton.addEventListener('click', () => {
            this.close();
        });
        
        const saveButton = buttonContainer.createEl('button', { text: '保存' });
        saveButton.classList.add('mod-cta');
        saveButton.addEventListener('click', () => {
            this.saveEvent();
        });
    }

    saveEvent() {
        const date = this.dateInput.getValue();
        const text = this.textInput.getValue();
        
        // 验证必填字段
        if (!date || !text) {
            // 显示错误信息
            const { contentEl } = this;
            const errorDiv = contentEl.createDiv('error-message');
            errorDiv.style.color = 'red';
            errorDiv.style.marginTop = '10px';
            errorDiv.setText('日期和内容为必填项！');
            
            // 3秒后自动清除错误信息
            setTimeout(() => {
                errorDiv.remove();
            }, 3000);
            
            return;
        }
        
        // 创建事件对象
        const eventData = {
            date,
            text,
            emoji: this.emojiInput.getValue() || undefined,
            color: this.colorInput.getValue() || undefined
        };
        
        // 调用回调函数
        this.onSave(eventData);
        
        // 关闭模态框
        this.close();
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}

// 事件列表模态框
export class EventListModal extends Modal {
    private plugin: YearlyGlancePlugin;
    private eventType: string;
    private events: Array<Holiday | Birthday | CustomEvent>;
    private onEdit: (index: number) => void;
    private onDelete: (index: number) => void;
    private onAdd: () => void;

    constructor(
        app: App, 
        plugin: YearlyGlancePlugin, 
        eventType: string,
        events: Array<Holiday | Birthday | CustomEvent>,
        onEdit: (index: number) => void,
        onDelete: (index: number) => void,
        onAdd: () => void
    ) {
        super(app);
        this.plugin = plugin;
        this.eventType = eventType;
        this.events = events;
        this.onEdit = onEdit;
        this.onDelete = onDelete;
        this.onAdd = onAdd;
    }

    onOpen() {
        const { contentEl } = this;
        
        // 设置标题
        let title: string;
        switch (this.eventType) {
            case 'holiday':
                title = '节日管理';
                break;
            case 'birthday':
                title = '生日管理';
                break;
            case 'custom':
                title = '自定义事件管理';
                break;
            default:
                title = '事件管理';
        }
        
        contentEl.createEl('h2', { text: title });
        
        // 添加按钮
        const addButtonContainer = contentEl.createDiv('add-button-container');
        addButtonContainer.style.marginBottom = '20px';
        
        const addButton = addButtonContainer.createEl('button', { text: '添加' });
        addButton.classList.add('mod-cta');
        addButton.addEventListener('click', () => {
            this.onAdd();
        });
        
        // 事件列表
        if (this.events.length === 0) {
            contentEl.createEl('p', { text: '暂无事件' });
        } else {
            const eventList = contentEl.createDiv('event-list');
            eventList.style.maxHeight = '400px';
            eventList.style.overflowY = 'auto';
            
            this.events.forEach((event, index) => {
                const eventItem = eventList.createDiv('event-item');
                eventItem.style.display = 'flex';
                eventItem.style.justifyContent = 'space-between';
                eventItem.style.alignItems = 'center';
                eventItem.style.padding = '8px';
                eventItem.style.borderBottom = '1px solid var(--background-modifier-border)';
                
                // 事件信息
                const eventInfo = eventItem.createDiv('event-info');
                
                // 日期和文本
                const eventText = eventInfo.createDiv('event-text');
                eventText.style.fontWeight = 'bold';
                eventText.setText(`${event.date} - ${event.text}`);
                
                // 表情和颜色
                if (event.emoji || event.color) {
                    const eventDetails = eventInfo.createDiv('event-details');
                    eventDetails.style.fontSize = '0.8em';
                    eventDetails.style.color = 'var(--text-muted)';
                    
                    let detailsText = '';
                    if (event.emoji) detailsText += `表情: ${event.emoji} `;
                    if (event.color) detailsText += `颜色: ${event.color}`;
                    
                    eventDetails.setText(detailsText);
                }
                
                // 操作按钮
                const eventActions = eventItem.createDiv('event-actions');
                
                const editButton = eventActions.createEl('button', { text: '编辑' });
                editButton.style.marginRight = '5px';
                editButton.addEventListener('click', () => {
                    this.onEdit(index);
                });
                
                const deleteButton = eventActions.createEl('button', { text: '删除' });
                deleteButton.classList.add('mod-warning');
                deleteButton.addEventListener('click', () => {
                    this.onDelete(index);
                });
            });
        }
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}
