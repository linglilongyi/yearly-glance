# [3.2.0](https://github.com/Moyf/yearly-glance/compare/3.1.6...3.2.0) (2025-08-21)


### ♻️ 重构

* 移除旧事件管理视图，新增总览管理视图 (#100) ([9a9954a](https://github.com/Moyf/yearly-glance/commit/9a9954a4981d974c01c1724b16ba99b4faa09534)), closes [#100](https://github.com/Moyf/yearly-glance/issues/100)


### ✨ 新功能

* 支持 Ctrl+Enter / Cmd+Enter 快捷键提交表单 (#99) ([92b204e](https://github.com/Moyf/yearly-glance/commit/92b204eb43f544bc60737fd8788b1c7a49afe3c8)), closes [#99](https://github.com/Moyf/yearly-glance/issues/99)
* 支持事件的导入导出 (#86) ([b8619b7](https://github.com/Moyf/yearly-glance/commit/b8619b76e8a2daa42fd72c409589ca3dab7385a9)), closes [#86](https://github.com/Moyf/yearly-glance/issues/86)



## [3.1.6](https://github.com/Moyf/yearly-glance/compare/3.1.5...3.1.6) (2025-07-31)


### ✨ 新功能

* 统一使用时区安全的日期处理方法 (#96) ([10ce9fc](https://github.com/Moyf/yearly-glance/commit/10ce9fc34e1ff881071d79cffe92d2c58e78c0bc)), closes [#96](https://github.com/Moyf/yearly-glance/issues/96)
* 优化事件日期计算逻辑，支持事件类型区分 (#97) ([14555d5](https://github.com/Moyf/yearly-glance/commit/14555d5497fa50b3738d836c02b9bae94c0eb44f)), closes [#97](https://github.com/Moyf/yearly-glance/issues/97)



## [3.1.5](https://github.com/Moyf/yearly-glance/compare/3.1.4...3.1.5) (2025-07-28)


### ✨ 新功能

* 优化事件提示框渲染方式及样式调整 (#95) ([670a854](https://github.com/Moyf/yearly-glance/commit/670a854ddaa5ed1d824bd0741ac23267d409be7b)), closes [#95](https://github.com/Moyf/yearly-glance/issues/95)


### 🐛 修复

* 优化生日事件星座和生肖计算逻辑 (#94) ([a59a254](https://github.com/Moyf/yearly-glance/commit/a59a254aaf234e4a77f3201aec6051f90f397f34)), closes [#94](https://github.com/Moyf/yearly-glance/issues/94)



## [3.1.4](https://github.com/Moyf/yearly-glance/compare/3.1.3...3.1.4) (2025-07-27)


### 🐛 修复

* 修正事件计算器中重复事件参数类型及传递 (#92) ([87fc96e](https://github.com/Moyf/yearly-glance/commit/87fc96e4ab42b514e536bf14ca81fd30f076f0c7)), closes [#92](https://github.com/Moyf/yearly-glance/issues/92)



## [3.1.3](https://github.com/Moyf/yearly-glance/compare/3.1.2...3.1.3) (2025-07-25)


### 🐛 修复

* 修复 useYearlyCalendar 日期比较时区问题 (#88) ([1e94f93](https://github.com/Moyf/yearly-glance/commit/1e94f93526e3941a435915f336ce8f910ed66b38)), closes [#88](https://github.com/Moyf/yearly-glance/issues/88)



## [3.1.2](https://github.com/Moyf/yearly-glance/compare/3.1.1...3.1.2) (2025-07-22)


### 🐛 修复

* 统一使用本地日期格式，修正时区问题 (#83) ([f45a2a7](https://github.com/Moyf/yearly-glance/commit/f45a2a7ca1a418ce18cd0f57e7cd5bfe79b45640)), closes [#83](https://github.com/Moyf/yearly-glance/issues/83)
* **DateInput:** 支持错误信息的HTML渲染 (#84) ([d92e39c](https://github.com/Moyf/yearly-glance/commit/d92e39c9bae3049f0a12f85205753d409c8e2d9b)), closes [#84](https://github.com/Moyf/yearly-glance/issues/84)



## [3.1.1](https://github.com/Moyf/yearly-glance/compare/3.1.0...3.1.1) (2025-07-22)


### 🐛 修复

* fix a typo ([94ce529](https://github.com/Moyf/yearly-glance/commit/94ce52978e9872eb6fd5944090538b08ec06eb2e))



# [3.1.0](https://github.com/Moyf/yearly-glance/compare/3.0.2...3.1.0) (2025-07-22)


### ✨ 新功能

* 新增年份视图中隐藏前后月份的功能 ([d2bed8d](https://github.com/Moyf/yearly-glance/commit/d2bed8d04774affe411f393e6381c5c9d9b00ab7))
* 增加标题前方 emoji 的选项 ([7754b08](https://github.com/Moyf/yearly-glance/commit/7754b088bcf5413a406104d0fbbd762190376bb7))


### 🎨 样式

* 为Tooltip添加淡入动画提升用户体验 ([7b24340](https://github.com/Moyf/yearly-glance/commit/7b2434083f06082cd1c75037a1079c9b6fa75728))



## [3.0.2](https://github.com/Moyf/yearly-glance/compare/3.0.1...3.0.2) (2025-07-22)


### ✨ 新功能

* 新增年份视图中隐藏前后月份的功能 ([d2bed8d](https://github.com/Moyf/yearly-glance/commit/d2bed8d04774affe411f393e6381c5c9d9b00ab7))


## [3.0.1](https://github.com/Moyf/yearly-glance/compare/3.0.0...3.0.1) (2025-07-21)


### ♻️ 重构

* 事件悬浮提示开关及优化Tooltip样式 (#76) ([a128778](https://github.com/Moyf/yearly-glance/commit/a128778780726c1020012e3a36bd9576cd537ecc)), closes [#76](https://github.com/Moyf/yearly-glance/issues/76)



# [3.0.0](https://github.com/Moyf/yearly-glance/compare/2.5.2...3.0.0) (2025-07-17)


### ♻️ 重构

* 利用container相关属性优化PC端YearlyCalendar的响应式设计 ([ebee569](https://github.com/Moyf/yearly-glance/commit/ebee569b107c1c41cda377654206226dd3b42f7c))
* 数据结构重构 (#60) ([b7a872c](https://github.com/Moyf/yearly-glance/commit/b7a872c1c411723a7b71a09920dcff484c377516)), closes [#60](https://github.com/Moyf/yearly-glance/issues/60)


### ✨ 新功能

* 使用 Tooltip 组件替换原生 title 实现提示功能 (#71) ([161da04](https://github.com/Moyf/yearly-glance/commit/161da04600b099656ec6f46320d259161d75f515)), closes [#71](https://github.com/Moyf/yearly-glance/issues/71)
* 新增公历日期自定义显示格式 (#75) ([38ef1b1](https://github.com/Moyf/yearly-glance/commit/38ef1b14ef117fb0dd15933dd6a483e064edcd01)), closes [#75](https://github.com/Moyf/yearly-glance/issues/75)
* 新增设置视图及相关命令支持 (#74) ([c4c330f](https://github.com/Moyf/yearly-glance/commit/c4c330fde5a31bb223be44b18e1c04ed23f87ee3)), closes [#74](https://github.com/Moyf/yearly-glance/issues/74)
* 新增首次安装时自动添加示例事件功能 (#72) ([bad92cc](https://github.com/Moyf/yearly-glance/commit/bad92cce75a08d15e336dd8488f871037365c155)), closes [#72](https://github.com/Moyf/yearly-glance/issues/72)
* **EventForm:** 自动聚焦第一个输入框提升用户体验 (#73) ([a1d486a](https://github.com/Moyf/yearly-glance/commit/a1d486a850989575e218dbcd04256e9368c36651)), closes [#73](https://github.com/Moyf/yearly-glance/issues/73)


### 💥 破坏性变更

* 更改事件日期结构，修复相关bug

* feat: 新增日期接口定义，支持阳历和阴历日期处理

* feat: 重构日期接口并新增智能日期解析器

* feat: 添加公历和农历日期验证器并集成验证逻辑

* feat: 优化日期处理及新增测试配置

* fix: 优化日期验证逻辑，增强公历和农历日期有效性检查

* feat: 添加v2到v3数据迁移功能

* feat: 新增农历工具类及扩展ISO日期解析功能

* feat: 重构事件日期计算逻辑，支持节气节日更新

* refactor: 删除DatePicker相关组件及样式代码

* feat: 添加ObsidianApp上下文及扩展ISO日期解析支持
* 
* feat: 优化事件日期处理及数据结构迁移

* fix: 统一事件日期结构，简化日期解析返回类型

* feat: 统一日期接口并优化日期处理逻辑

* fix(core): 更新废弃字段注释，明确替代字段说明

* fix: 修复YearlyCalendar组件中的若干渲染和样式问题

* feat: 新增日期输入组件及优化年历事件日期处理

* style: 优化日期输入组件样式及状态表现

* test: 添加闰月处理降级逻辑的单元测试

* refactor: 简化事件列表组件，移除内置节日折叠功能

* fix: 优化日期解析逻辑，增强输入校验和错误提示

* fix: 优化事件类型判断及搜索过滤逻辑

* style: 调整事件表单间距及颜色选择器样式

* feat(tooltip): 支持禁用状态及Portal渲染优化样式

* feat: 优化日期输入组件及完善多语言提示信息

* feat: 增强日期解析错误提示，支持多种格式校验

* fix(i18n): 优化日期和事件提示文本，提升表达准确性



## [2.5.2](https://github.com/Moyf/yearly-glance/compare/2.5.1...2.5.2) (2025-07-13)


### 🐛 修复

* 事件管理器中适配长文本 ([94ca81f](https://github.com/Moyf/yearly-glance/commit/94ca81f8b5c77f273b587c99f7b0a5c85242bd94)) 修复 [#39](https://github.com/Moyf/yearly-glance/issues/39)


* 修复列表视图横向滚动及布局选项显示问题 ([a36a777](https://github.com/Moyf/yearly-glance/commit/a36a777b52495d6a802b0da12afe8aad03706c8f))
    - YearlyCalendarView.css中调整列表视图布局，取消flex-wrap换行，使列表项横向滚动生效，提升用户体验
    - 增加max-width限制，防止文本溢出影响布局
    - ViewSettings.tsx中恢复1x12布局选项在列表和日历视图中显示，保证布局选择一致性和功能完整性


## [2.5.1](https://github.com/Moyf/yearly-glance/compare/2.5.0...2.5.1) (2025-07-13)


### 🐛 修复

* 修复列表视图横向滚动及布局选项显示问题 ([a36a777](https://github.com/Moyf/yearly-glance/commit/a36a777b52495d6a802b0da12afe8aad03706c8f))
    - YearlyCalendarView.css中调整列表视图布局，取消flex-wrap换行，使列表项横向滚动生效，提升用户体验
    - 增加max-width限制，防止文本溢出影响布局
    - ViewSettings.tsx中恢复1x12布局选项在列表和日历视图中显示，保证布局选择一致性和功能完整性

# [2.5.0](https://github.com/Moyf/yearly-glance/compare/2.4.2...2.5.0) (2025-07-12)


### ✨ 新功能

* **settings:** 按视图类型过滤布局选项 ([7fb6821](https://github.com/Moyf/yearly-glance/commit/7fb6821a100593d0c6fa37120e7b6b3df9baca9d))


### 🎨 样式

* 适配列表和日历的最小宽度区分 ([a193145](https://github.com/Moyf/yearly-glance/commit/a19314568128c46262db0b45f7c98c3dbc9936c3))
* 适配列表和日历的最小宽度区分，为日历界面增加了更多按钮 ([f515e80](https://github.com/Moyf/yearly-glance/commit/f515e808ef3d69429dfdbe18048b3e122b9dcfcd))
    1. emoji 显示位置（上方）
    2. 文字换行
    3. 鼠标悬浮显示提示
* 优化年度日历网格布局和样式 ([f6eeac5](https://github.com/Moyf/yearly-glance/commit/f6eeac5be69b606239ee114f6ea41dda49af6bad))
* 更新 CSS ([5ba7a43](https://github.com/Moyf/yearly-glance/commit/5ba7a43d16d976d72d7032c22f3d96b7455abc3b))

### 🐛 修复

* 修复基本视图类型布局（经典年历） ([2c69661](https://github.com/Moyf/yearly-glance/commit/2c6966149007bfd5a9b15e5772a1fee75de79e07))



## [2.4.2](https://github.com/Moyf/yearly-glance/compare/2.4.1...2.4.2) (2025-07-10)


### ✨ 新功能

* **yearly-calendar:** 用CSS网格视图重构年历视图 ([bbf5505](https://github.com/Moyf/yearly-glance/commit/bbf550532c3dac8b8a6d72910d110c9212f93acd))


### 🐛 修复

* **i18n:** 当语言不存在时默认使用英语 ([3aa293f](https://github.com/Moyf/yearly-glance/commit/3aa293f60c488017eb1b11c9586b8296fc628c37))



## [2.4.1](https://github.com/Moyf/yearly-glance/compare/2.4.0...2.4.1) (2025-06-13)


### ✨ 新功能

* 支持移动端使用，修改manifest配置 ([7ee52eb](https://github.com/Moyf/yearly-glance/commit/7ee52ebe21b5291435d23ad079dcb30be9e2cec1))



# [2.4.0](https://github.com/Moyf/yearly-glance/compare/2.3.0...2.4.0) (2025-06-06)


### ✨ 新功能

* 优化输入组件及界面交互体验 ([321631c](https://github.com/Moyf/yearly-glance/commit/321631c09caad59e68e72a272d38723d73a7ed6b))
* 优化预设颜色设置及界面交互体验 ([f0a8150](https://github.com/Moyf/yearly-glance/commit/f0a81503639761cb663cf2ca62fe1bd42c70a83c))
* 支持定义事件颜色预设 (#47) ([1dc13d3](https://github.com/Moyf/yearly-glance/commit/1dc13d3528353eac541416e123936dddd4e0874f)), closes [#47](https://github.com/Moyf/yearly-glance/issues/47)


### 🐛 修复

* 修复 props 传递时遗漏扩展导致的属性丢失 ([d86eaea](https://github.com/Moyf/yearly-glance/commit/d86eaea30d6c986cd3821de8cb69e12831a83bca))
* 优化年度日历事件类型定义及事件处理逻辑 ([1d93fd2](https://github.com/Moyf/yearly-glance/commit/1d93fd25a0c59d22bb64ee9f3926ae593e2a2183))
* **types:** 注释掉 group 中的 calendar 设置项 ([73e2721](https://github.com/Moyf/yearly-glance/commit/73e2721ebb852c5430d0d550e07949dcaa992a69))



# [2.3.0](https://github.com/Moyf/yearly-glance/compare/2.2.2...2.3.0) (2025-05-19)


### ✨ 新功能

* 新增农历日显示及调整多语言描述文本 ([5eb5e94](https://github.com/Moyf/yearly-glance/commit/5eb5e94c1f2cd15346e711084d3e94910f5f145d))
* 优化构建配置及国际化语言获取逻辑 ([71a9d8f](https://github.com/Moyf/yearly-glance/commit/71a9d8ffbc1fce320e87210af645fcb1f5bd1ad6))
* 重新调整设置界面，增加更多分组 ([6ae3457](https://github.com/Moyf/yearly-glance/commit/6ae3457fba7fd6b7c93aa1dacf43878a08538b75))


### 🐛 修复

* 优化事件日期计算逻辑，修正年份判断条件 ([8352455](https://github.com/Moyf/yearly-glance/commit/8352455b92ba70e8fc7b93303a919c492ddef868))



## [2.2.2](https://github.com/Moyf/yearly-glance/compare/2.2.1...2.2.2) (2025-04-27)


### ✨ 新功能

* 新增年份控制按钮功能 ([f02f83c](https://github.com/Moyf/yearly-glance/commit/f02f83cb97241a6a9e965d5c616f18b55ca2c497))
* 优节气日期计算及数据迁移逻辑 ([27b86dc](https://github.com/Moyf/yearly-glance/commit/27b86dc2c74412188b4d8a3c7c9bfb308e8c72ea))


### 🐛 修复

* 优化日期处理和事件图标显示逻辑 ([af83473](https://github.com/Moyf/yearly-glance/commit/af834737eec620a1cd7b8e702a5dd522010d30a0))



## [2.2.1](https://github.com/Moyf/yearly-glance/compare/2.2.0...2.2.1) (2025-04-25)


### ♻️ 重构

* 拆分 YearlyCalendar 中的 EventManager 组件 ([64223fb](https://github.com/Moyf/yearly-glance/commit/64223fb4822c37bffd4d351981bfc09192431a18))


### ✨ 新功能

* 添加事件列表排序功能，支持按名称和日期排序 ([43e5fc2](https://github.com/Moyf/yearly-glance/commit/43e5fc2beda63328a00d253953655e88503ae86e))
* **event-manager:** 新增事件排序控件及相关国际化支持 ([42670a4](https://github.com/Moyf/yearly-glance/commit/42670a4fa43edf07bdba2a9286c936bb8eab98df))



# [2.2.0](https://github.com/Moyf/yearly-glance/compare/2.1.6...2.2.0) (2025-04-24)


### ♻️ 重构

* 新增日期显示及年份选项生成工具 ([5d5db8c](https://github.com/Moyf/yearly-glance/commit/5d5db8cc9da65ba406f040535204918d4fb3aa47))
* 移除 parseDate 相关冗余字段和依赖 ([aacd258](https://github.com/Moyf/yearly-glance/commit/aacd2582d6ee2fac2190a92574a46f6623fc7eb9))
* 重构事件管理界面及事件表单日期选择逻辑 ([41fd713](https://github.com/Moyf/yearly-glance/commit/41fd71313b1726f6e98efc5f9aa81550479c3c05))


### ✨ 新功能

* 合并内置节日数据，支持自动添加新节日 ([e37a2d6](https://github.com/Moyf/yearly-glance/commit/e37a2d69656b3b3116d0518b6c859430b86c60b7))
* 事件管理中为内置节日增加统一设置是否显示的开关 ([637576d](https://github.com/Moyf/yearly-glance/commit/637576d88fa0cda3610ba4857eacd10f333ad0ab))
* 统一内置节假日ID前缀并新增部分节日 ([6145049](https://github.com/Moyf/yearly-glance/commit/614504916d5f388dd5ce863569d0ec311c34acdb))
* 优化农历日期计算逻辑，支持闰月及边界情况处理 ([876a27e](https://github.com/Moyf/yearly-glance/commit/876a27ee96d9b31117ac5b2ae92f4e598382b2f3))
* 优化Select组件样式及实现虚拟滚动功能 ([0f3a835](https://github.com/Moyf/yearly-glance/commit/0f3a83506da4a7f41be4ab3d43471651f20e4df5))
* 增加重载插件的command命令 ([1c484ae](https://github.com/Moyf/yearly-glance/commit/1c484ae36956c2d6912897f61f117f1b68defb15))
* 重构日期选择器并优化事件表单功能 ([82c11cf](https://github.com/Moyf/yearly-glance/commit/82c11cfab8a631451ba63ae3f526860ac7ebb73d))


### 🎨 样式

* **DateSelector:** 新增日期选择器组件及样式 ([aa0b56b](https://github.com/Moyf/yearly-glance/commit/aa0b56bc38967e9e3c4c4fd5001ada2c88611cd5))


### 🐛 修复

* 优化节气日期计算，避免重复创建日期对象 ([ab06468](https://github.com/Moyf/yearly-glance/commit/ab064689709f2bdc09ff0736db7145ed95ce7f1e))
* **data:** 修复原有内置节日错误单词，进行数据迁移 ([a49688f](https://github.com/Moyf/yearly-glance/commit/a49688facdf34a8a107830bdb4171d9c9e9e29f9))



## [2.1.6](https://github.com/Moyf/yearly-glance/compare/2.1.5...2.1.6) (2025-04-22)


### ♻️ 重构

* **settings:** 修改默认的设置为2x6列表视图 ([040e716](https://github.com/Moyf/yearly-glance/commit/040e716dc25ea2ad827c3f91258e9f4d11ab811b))



## [2.1.5](https://github.com/Moyf/yearly-glance/compare/2.1.4...2.1.5) (2025-04-21)


### 🐛 修复

* **event:** 修复生日中双鱼座未正确翻译 ([d01e3bb](https://github.com/Moyf/yearly-glance/commit/d01e3bb107b4a7d5c5e87f988d45f41a0200660e))



## [2.1.4](https://github.com/Moyf/yearly-glance/compare/2.1.3...2.1.4) (2025-04-21)


### ✨ 新功能

* 隐藏空日期时保留今天的显示 ([4a6adac](https://github.com/Moyf/yearly-glance/commit/4a6adacc757f3943390bc8d2297f03568cf5dc17))


### 🎨 样式

* 对于没有年份的生日，年龄和生肖显示成空，并将原有提示信息放在tooltip中 ([274dbc1](https://github.com/Moyf/yearly-glance/commit/274dbc14659ec88f74cd5b7555f0695aaf50d011))
* **tooltip:** eventTooltip中null值显示为- ([24e5d13](https://github.com/Moyf/yearly-glance/commit/24e5d13972cdd10d8e98ba74a609cd46c5b69498))


### 🐛 修复

* **eventmanager:** 修复搜索时事件类型未正确传递 ([7d4c6d4](https://github.com/Moyf/yearly-glance/commit/7d4c6d4bfce62186abc9927912e97c5c9c957f19))



## [2.1.3](https://github.com/Moyf/yearly-glance/compare/2.1.2...2.1.3) (2025-04-19)


### ✨ 新功能

* 生肖增加干支前缀，增加对应i18n ([229b2b6](https://github.com/Moyf/yearly-glance/commit/229b2b6c725b631af83579443899895549092f8a))


### 🐛 修复

* 农历日期计算与展示问题 [@linglilongyi](https://github.com/linglilongyi) (#30) ([d16512b](https://github.com/Moyf/yearly-glance/commit/d16512b608a589b51b83560e421cdbe34d1f2d76)), closes [#30](https://github.com/Moyf/yearly-glance/issues/30)
* 修复农历下一次生日的显示错误 ([fe2a144](https://github.com/Moyf/yearly-glance/commit/fe2a144619378ead54466bbdfa6ac40c2311dafb))

### 👨‍💻 新贡献者

* [@linglilongyi](https://github.com/linglilongyi)


## [2.1.2](https://github.com/Moyf/yearly-glance/compare/2.1.1...2.1.2) (2025-04-18)


### 🐛 修复

* 一览视图中事件的默认图标未正确显示 ([375cb38](https://github.com/Moyf/yearly-glance/commit/375cb3883ee12762ecfc556bdfb0cbfd17fce4ae))


### 📝 文档

* 增加CONTRIBUTING.md (#29) ([91509a0](https://github.com/Moyf/yearly-glance/commit/91509a0b01b8a6c850f3f5099f08d8ce500bdb0d)), closes [#29](https://github.com/Moyf/yearly-glance/issues/29)
* **readme:** 更新优化 README 文档 ([d7c1d45](https://github.com/Moyf/yearly-glance/commit/d7c1d45200bcf0214f85a79b037d6e51e2fa2df4))


### 🔧 持续集成

* 微调 Release 生成的文本格式 ([6e42481](https://github.com/Moyf/yearly-glance/commit/6e4248123905fa291be80f59423efe4514407955))



## [2.1.1](https://github.com/Moyf/yearly-glance/compare/2.1.0...2.1.1) (2025-04-18)


### 🐛 修复

* **eventform:** 修复事件隐藏在生日表单中未正确显示 ([273e0b4](https://github.com/Moyf/yearly-glance/commit/273e0b4f1b61b2018d954c40ca0e027caba0fe61))


### 📝 文档

* **CHANGELOG:** 修缮更新日志 ([4605228](https://github.com/Moyf/yearly-glance/commit/4605228a9f25e5402b0be9896ef4d371f9542008))
* **manifest:** 更新插件描述 ([57ca2d4](https://github.com/Moyf/yearly-glance/commit/57ca2d40427d42cdcab1956f3ff530a8947c8749))


### 🔧 持续集成

* **scripts:** 移除changelog:append以及部分husky残留 ([bbf76d1](https://github.com/Moyf/yearly-glance/commit/bbf76d1e8bf8ab55c12b638482b33ba24b2aa7d6))
* **workflow:** 修改变更日志的生成，增加中文的安装指南 ([b94f686](https://github.com/Moyf/yearly-glance/commit/b94f6860d70c67a337ebd47674c8122ce1729dc9))



# [2.1.0](https://github.com/Moyf/yearly-glance/compare/1.0.0...2.1.0) (2025-04-17)


## 2.1.0 改动

### ✨ 新功能：全都可以藏起来！ 🙈

* **隐藏事件:** 给所有事件类型都增加「可隐藏」属性 ([ae62f4d](https://github.com/Moyf/yearly-glance/commit/ae62f4dddcfba4e27c4afd28046c982c01b336c0)), closes [#25](https://github.com/Moyf/yearly-glance/issues/25)
* **隐藏空日期:** 增加列表视图「隐藏空日期」的按钮，可以配合高度限制以及类型筛选查看过滤后的简化视图 ([12831e5](https://github.com/Moyf/yearly-glance/commit/12831e59ed6b32f81948144ece735ee7d8be744b)), closes [#26](https://github.com/Moyf/yearly-glance/issues/26)


### 🎨 样式

* **事件管理器：** 给不同的事件页面（event-list）增加了 datatype 属性；并调整了按钮的图标 ([28a20c4](https://github.com/Moyf/yearly-glance/commit/28a20c4129e3e7cea33eef4316129e9c3512fe9c))
* **列表视图：** 修复列表模式的 hover 样式 ([1b7508e](https://github.com/Moyf/yearly-glance/commit/1b7508e7e39d6042fd3f568cd33c763a7278d152))


### 📝 文档

* **持续集成:** 尝试提交时自动添加commit进changelog ([73fbb82](https://github.com/Moyf/yearly-glance/commit/73fbb82397c0dbff6d16cf59e27a8b4fe76ecd28))
* **规范:** 修复changelog中不规范的提交 ([ebe52a5](https://github.com/Moyf/yearly-glance/commit/ebe52a5f3859baeae677d48b0a9437e209771054) [e838743](https://github.com/Moyf/yearly-glance/commit/e8387439f63d96566a83bae4eb071271fe956b4e))


## 2.0.0 超大更新

### 💥 破坏性变更：数据结构重写

* **事件ID:** 给所有事件增加了 UUID，可能会导致系统内置节日重复创建（可以去 data.json 手动删除，或者删除 data.json 文件并重置插件）

### ♻️ 重构

* **删除确认:** 将onCancel重命名为onClose以保持一致性 ([b93750e](https://github.com/Moyf/yearly-glance/commit/b93750ebc9f664a3444f3903c22d17f412af546e))
* **Event默认类型:** 更改事件类型的默认排序（自定义事件->生日->节日） ([f562d9e](https://github.com/Moyf/yearly-glance/commit/f562d9ecf95cd14cdad1ca8a616646bef1e75a95))

### ✨ 新功能

* **颜色选择:** 为事件自定义添加颜色选择器组件 ([cfbf6ca](https://github.com/Moyf/yearly-glance/commit/cfbf6ca5e76a04d544233534e3511d1c2a225576))
* **删除前确认:** 实现用于事件删除确认的ConfirmDialog组件 ([24813f4](https://github.com/Moyf/yearly-glance/commit/24813f416a21fe695f2933fa7c1e48aa2330abdd))
* **事件创建:** 增强事件创建功能，添加更多属性 ([c9b2943](https://github.com/Moyf/yearly-glance/commit/c9b2943e33e054679e85f07cb0f14c1b15fbe690))
* **事件管理器:** 实现事件搜索功能并增强工具提示操作 ([93bc380](https://github.com/Moyf/yearly-glance/commit/93bc380db806cd0d2313e2ed071258a317090cd4))
* **事件详情:** 为事件提示框添加日期显示功能 ([4d4e789](https://github.com/Moyf/yearly-glance/commit/4d4e789d6262717f5d6ce04a5e2986a65f68e9c5))
* **UUID:** 集成UUID生成功能用于事件ID，并加强事件管理 ([17446e0](https://github.com/Moyf/yearly-glance/commit/17446e083d7883dc8d92f61b8621347dd48d9624))
* **视图选项:** 添加视图预设选项及配置处理 ([ee19736](https://github.com/Moyf/yearly-glance/commit/ee19736dd352520459d6bc34a9e00ccfa7f538c1))

### 🎨 样式

* **样式调整**: 为添加事件设置指针光标样式 ([f1d3d0a](https://github.com/Moyf/yearly-glance/commit/f1d3d0a5a9b1d716909477a5075a020d75b8340e))
    * 调整 flex 值 ([46beb47](https://github.com/Moyf/yearly-glance/commit/46beb47fa81a6d4e9ceb246bc778a193a560c944))
    * 调整表单选项的样式 ([60edc3a](https://github.com/Moyf/yearly-glance/commit/60edc3ad755d8e68895ec27b2827c6296b83009d))
    * 修改边框样式 ([fc9dd72](https://github.com/Moyf/yearly-glance/commit/fc9dd726d284fbbc4d9cd03e18a75a01265e4f8e))
    * **EventTooltip:** 增大操作按钮间距以优化布局 ([08850c1](https://github.com/Moyf/yearly-glance/commit/08850c1b12c013fe55c1c755c7091bacf9b77e6a))
    * **yearlyglancelist:** 修复列表模式的 hover 样式 ([1b7508e](https://github.com/Moyf/yearly-glance/commit/1b7508e7e39d6042fd3f568cd33c763a7278d152))
* **概览视图:** 调整月份行间距以改善布局一致性 ([5de40e9](https://github.com/Moyf/yearly-glance/commit/5de40e9abca87d2552fa6a07e80ad2a873f66a06))
    *  重构CSS以提高可读性和可维护性 ([caab2e8](https://github.com/Moyf/yearly-glance/commit/caab2e8d49cb0fb6b49b99f3e6b7cc0825baa212))
    * 重构标签页组件并优化样式 ([972b091](https://github.com/Moyf/yearly-glance/commit/972b091b0950233b2bae1777cdd3db809027725b))

### 🐛 修复

* 确保文件导入中的大小写一致，并更新 TypeScript 配置 ([a1b32aa](https://github.com/Moyf/yearly-glance/commit/a1b32aa33bcb8d90033badc39acc3b018d393259))
* 优化发布工作流中提交信息解析的正则表达式模式 ([ffc792d](https://github.com/Moyf/yearly-glance/commit/ffc792ddadc5570cbef82d88e4bacdf36d563bef))
* 更新事件类型引用以保持一致 ([5efd7c0](https://github.com/Moyf/yearly-glance/commit/5efd7c0ba1b8d751c9266327ac3e59b51b62486e))
* 更新发布工作流中用于检测重大变更的正则表达式 ([7462f0e](https://github.com/Moyf/yearly-glance/commit/7462f0ed2d6093bf1203b7a406eab5ae105a4148))

### 📝 文档

* **changelog:** 增加2.0.0版本更新日志的中英文文档 ([80c28c3](https://github.com/Moyf/yearly-glance/commit/80c28c32eeba6e3b591ca91e5fcf7f0827e0704c))

### 🔧 持续集成

* 尝试提交时自动添加commit进changelog ([24b6114](https://github.com/Moyf/yearly-glance/commit/24b61144c0cda6cfb32027b9e968b2aaf937041a))
* 更改release更新日志的生成方式 ([17405bf](https://github.com/Moyf/yearly-glance/commit/17405bfd15531d52befd2c9c4c2176768881a685))
* 简化命令，changelog:unreleased 改成 changelog:u ([d413d4a](https://github.com/Moyf/yearly-glance/commit/d413d4a79a51fe2163ef5c94556b773c9bd4b85c))
* 重构changelog的生成方式 ([343c0a1](https://github.com/Moyf/yearly-glance/commit/343c0a164f50cd306c54983f94e7de095bb7b047))
* **scripts:** 更新version-bump脚本，beta版本改成修改manifest-beta.json文件 ([80b04a8](https://github.com/Moyf/yearly-glance/commit/80b04a8c901b982d9c454357f305056b2dfbeb8e))

### 🔨 杂项

* **提交流程:** 使用 conventional 和 commitizen 工具 ([829f5a8](https://github.com/Moyf/yearly-glance/commit/829f5a81c379c4bee09d4cf82b5ba78b662e8168))
* 更新工具提示中的日期标签并增强国际化支持 ([6504060](https://github.com/Moyf/yearly-glance/commit/6504060a3f0bb9b7cc01c06fb95699aca3c3052c))

### ⏪️ 回退

* ci: 尝试提交时自动添加commit进changelog ([73fbb82](https://github.com/Moyf/yearly-glance/commit/73fbb82397c0dbff6d16cf59e27a8b4fe76ecd28))


# [1.0.0](https://github.com/Moyf/yearly-glance/compare/2f988aaf5ac4f8118626d9badd8897d900737d1a...1.0.0) (2025-04-10)


### ♻️ 重构

* **release.yml:** 增强变更日志生成，支持重大变更和改进的提交类型分类 ([be2ee77](https://github.com/Moyf/yearly-glance/commit/be2ee779a6e6d8bfe25c01f50820c66ef49e09c5))


### ✨ 新功能

* **event:** 为EventFormModal引入带有选项卡界面的事件类型选择 ([ba8845e](https://github.com/Moyf/yearly-glance/commit/ba8845e8edd3fa39a52198b476b11cf52752f7ef))
* **script:** 更改图标 ([7f908a0](https://github.com/Moyf/yearly-glance/commit/7f908a0da166498a5cdbc1353fbcc6150d019188))
* **style:** 更新深色主题下的悬停颜色) ([635b834](https://github.com/Moyf/yearly-glance/commit/635b834798be9b9963bce88ffa4cd6aed582cd45))


### 🐛 修复

* **script:** 将 'manifest.json' 添加到需复制至保管库的文件列表中 ([b9c8af9](https://github.com/Moyf/yearly-glance/commit/b9c8af98014bf9c4691feba8c83ee83fe1a0b43a))


### 📝 文档

* **init:** 初始化插件信息 ([2f988aa](https://github.com/Moyf/yearly-glance/commit/2f988aaf5ac4f8118626d9badd8897d900737d1a))
* **manifest:** 为 Yearly Glance 插件添加 manifest-beta.json ([6e831f0](https://github.com/Moyf/yearly-glance/commit/6e831f0a82f08eb203d01f5c4edcf357d2d511ec))
* **README:** 为项目添加星标、下载量、许可证、问题及最近提交的徽章；在英文和中文的README文件中均包含星标历史图表 ([f07c875](https://github.com/Moyf/yearly-glance/commit/f07c8751ea6c91da2f6f65df3a1d8ecc54b50749))


### 🔨 杂项

* **.gitignore:** 将'styles.css'添加到忽略文件列表中 ([e99ec99](https://github.com/Moyf/yearly-glance/commit/e99ec99a0167c45a9125c00d83886f7c9666644c))
* **.gitignore:** 排除 Thumbs.db 以防止 Windows Explorer 跟踪视图状态 ([2f6924c](https://github.com/Moyf/yearly-glance/commit/2f6924c717a300c011ec29351259b3cd5b3cc985))
* **style:** remove tooltip CSS ([6dbca9e](https://github.com/Moyf/yearly-glance/commit/6dbca9e883fe2e29c0cf0d1e1f0d3a6959d351ab))



