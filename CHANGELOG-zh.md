# [2.0.0](https://github.com/Moyf/yearly-glance/compare/1.0.0...2.0.0) (2025-04-16)


### Bug Fixes

* 确保文件导入中的大小写一致，并更新 TypeScript 配置 ([a1b32aa](https://github.com/Moyf/yearly-glance/commit/a1b32aa33bcb8d90033badc39acc3b018d393259))
* 更新事件类型引用以确保一致性 ([5efd7c0](https://github.com/Moyf/yearly-glance/commit/5efd7c0ba1b8d751c9266327ac3e59b51b62486e))
* 改进了视图布局，减少不均衡分布的情况出现

### Features

* **ColorSelector:** 为事件添加定制颜色选择器组件 ([cfbf6ca](https://github.com/Moyf/yearly-glance/commit/cfbf6ca5e76a04d544233534e3511d1c2a225576))
* **confirm-dialog:** 删除时增加二次提示 ([24813f4](https://github.com/Moyf/yearly-glance/commit/24813f416a21fe695f2933fa7c1e48aa2330abdd))
* **EventForm:** 新建事件的时候自动展开可选配置 ([c9b2943](https://github.com/Moyf/yearly-glance/commit/c9b2943e33e054679e85f07cb0f14c1b15fbe690))
* **EventManager:** 增强事件搜索功能并提供事件在管理器定位操作。 ([93bc380](https://github.com/Moyf/yearly-glance/commit/93bc380db806cd0d2313e2ed071258a317090cd4))
* **EventTooltip:** 在事件的查看窗口中显示日期，并支持了日期文本的本地化 ([4d4e789](https://github.com/Moyf/yearly-glance/commit/4d4e789d6262717f5d6ce04a5e2986a65f68e9c5))
* **UUID:** 集成UUID生成以创建事件ID，并加强事件管理功能 ([17446e0](https://github.com/Moyf/yearly-glance/commit/17446e083d7883dc8d92f61b8621347dd48d9624))
* **YearlyCalendar:** 增加「年度一览」和「传统日历」两种默认视图布局（原有配置移入「自定义」） ([ee19736](https://github.com/Moyf/yearly-glance/commit/ee19736dd352520459d6bc34a9e00ccfa7f538c1))
* 支持在阅览视图中直接新增事件
* 增加了「限制高度」的切换按钮
* 调整事件顺序，默认类型改为「自定义事件」
* 未定义的 Emoji 和颜色不再写入数据


### BREAKING CHANGES

* **version:** 给所有事件增加了 UUID，可能会导致系统内置节日重复创建，可以去 data.json 手动删除，或者删除 data.json 文件并重置插件。



# [1.0.0](https://github.com/Moyf/yearly-glance/compare/b9c8af98014bf9c4691feba8c83ee83fe1a0b43a...1.0.0) (2025-04-10)


