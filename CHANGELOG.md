# [2.0.0](https://github.com/Moyf/yearly-glance/compare/1.0.0...2.0.0) (2025-04-17)


### ♻️ Refactor

* **confirm-dialog:** Rename onCancel to onClose for consistency ([b93750e](https://github.com/Moyf/yearly-glance/commit/b93750ebc9f664a3444f3903c22d17f412af546e))
* **Event:** change the default order of event types ([f562d9e](https://github.com/Moyf/yearly-glance/commit/f562d9ecf95cd14cdad1ca8a616646bef1e75a95))


### ✨ Features

* **ColorSelector:** Add color selector component for event customization ([cfbf6ca](https://github.com/Moyf/yearly-glance/commit/cfbf6ca5e76a04d544233534e3511d1c2a225576))
* **confirm-dialog:** Implement ConfirmDialog component for event deletion confirmation ([24813f4](https://github.com/Moyf/yearly-glance/commit/24813f416a21fe695f2933fa7c1e48aa2330abdd))
* **EventForm:** Enhance event creation with additional properties ([c9b2943](https://github.com/Moyf/yearly-glance/commit/c9b2943e33e054679e85f07cb0f14c1b15fbe690))
* **EventManager:** Implement event search functionality and enhance tooltip actions ([93bc380](https://github.com/Moyf/yearly-glance/commit/93bc380db806cd0d2313e2ed071258a317090cd4))
* **EventTooltip:** Add date display functionality to event tooltip ([4d4e789](https://github.com/Moyf/yearly-glance/commit/4d4e789d6262717f5d6ce04a5e2986a65f68e9c5))
* **UUID:** Integrate UUID generation for event IDs and enhance event management ([17446e0](https://github.com/Moyf/yearly-glance/commit/17446e083d7883dc8d92f61b8621347dd48d9624))
* **YearlyCalendar:** Add view preset options and configuration handling ([ee19736](https://github.com/Moyf/yearly-glance/commit/ee19736dd352520459d6bc34a9e00ccfa7f538c1))


### 🎨 Styles

* add pointer cursor style for add event ([f1d3d0a](https://github.com/Moyf/yearly-glance/commit/f1d3d0a5a9b1d716909477a5075a020d75b8340e))
* adjust the flex values ([46beb47](https://github.com/Moyf/yearly-glance/commit/46beb47fa81a6d4e9ceb246bc778a193a560c944))
* Adjust the style of the form options. ([60edc3a](https://github.com/Moyf/yearly-glance/commit/60edc3ad755d8e68895ec27b2827c6296b83009d))
* change border style ([fc9dd72](https://github.com/Moyf/yearly-glance/commit/fc9dd726d284fbbc4d9cd03e18a75a01265e4f8e))
* **EventManager:** Add data attributes to event info rows for improved accessibility ([28c453e](https://github.com/Moyf/yearly-glance/commit/28c453e72c0ce1e039651c2b48d45f298d77fc1e))
* **EventTooltip:** Increase action button gap for improved layout ([08850c1](https://github.com/Moyf/yearly-glance/commit/08850c1b12c013fe55c1c755c7091bacf9b77e6a))
* **YearlyCalendar:** Adjust month-row gap for improved layout consistency ([5de40e9](https://github.com/Moyf/yearly-glance/commit/5de40e9abca87d2552fa6a07e80ad2a873f66a06))
* **YearlyCalendar:** Refactor CSS for improved readability and maintainability ([caab2e8](https://github.com/Moyf/yearly-glance/commit/caab2e8d49cb0fb6b49b99f3e6b7cc0825baa212))
* **YearlyCalendar:** Refactor tab component and enhance styling ([972b091](https://github.com/Moyf/yearly-glance/commit/972b091b0950233b2bae1777cdd3db809027725b))
* **yearlyglancelist:** Fix the hover style in list mode ([1b7508e](https://github.com/Moyf/yearly-glance/commit/1b7508e7e39d6042fd3f568cd33c763a7278d152))


### 🐛 Bug Fixes

* Ensure consistent casing in file imports and update TypeScript configuration ([a1b32aa](https://github.com/Moyf/yearly-glance/commit/a1b32aa33bcb8d90033badc39acc3b018d393259))
* Refine regex patterns for commit message parsing in release workflow ([ffc792d](https://github.com/Moyf/yearly-glance/commit/ffc792ddadc5570cbef82d88e4bacdf36d563bef))
* Update event type references for consistency ([5efd7c0](https://github.com/Moyf/yearly-glance/commit/5efd7c0ba1b8d751c9266327ac3e59b51b62486e))
* Update regex for breaking changes detection in release workflow ([7462f0e](https://github.com/Moyf/yearly-glance/commit/7462f0ed2d6093bf1203b7a406eab5ae105a4148))


### 📝 Documentation

* 修复changelog中不规范的提交 ([ebe52a5](https://github.com/Moyf/yearly-glance/commit/ebe52a5f3859baeae677d48b0a9437e209771054))

* **changelog:** Add Chinese and English documentation for the 2.0.0 version changelog. ([80c28c3](https://github.com/Moyf/yearly-glance/commit/80c28c32eeba6e3b591ca91e5fcf7f0827e0704c))



# [1.0.0](https://github.com/Moyf/yearly-glance/compare/2f988aaf5ac4f8118626d9badd8897d900737d1a...1.0.0) (2025-04-10)


### ♻️ Refactor

* **release.yml:** Enhance changelog generation with support for breaking changes and improved commit type categorization ([be2ee77](https://github.com/Moyf/yearly-glance/commit/be2ee779a6e6d8bfe25c01f50820c66ef49e09c5))


### ✨ Features

* **event:** Introduce tabbed interface for event type selection in EventFormModal ([ba8845e](https://github.com/Moyf/yearly-glance/commit/ba8845e8edd3fa39a52198b476b11cf52752f7ef))
* **script:** change the icon ([7f908a0](https://github.com/Moyf/yearly-glance/commit/7f908a0da166498a5cdbc1353fbcc6150d019188))
* **style:** update hover color in dark theme) ([635b834](https://github.com/Moyf/yearly-glance/commit/635b834798be9b9963bce88ffa4cd6aed582cd45))


### 🐛 Bug Fixes

* **script:** Add 'manifest.json' to the list of files to be copied to the vault ([b9c8af9](https://github.com/Moyf/yearly-glance/commit/b9c8af98014bf9c4691feba8c83ee83fe1a0b43a))


### 📝 Documentation

* **init:** Initialize plugin information. ([2f988aa](https://github.com/Moyf/yearly-glance/commit/2f988aaf5ac4f8118626d9badd8897d900737d1a))
* **manifest:** Add manifest-beta.json for Yearly Glance plugin ([6e831f0](https://github.com/Moyf/yearly-glance/commit/6e831f0a82f08eb203d01f5c4edcf357d2d511ec))
* **README:** Add badges for stars, downloads, license, issues, and last commit; include star history chart in both English and Chinese README files. ([f07c875](https://github.com/Moyf/yearly-glance/commit/f07c8751ea6c91da2f6f65df3a1d8ecc54b50749))



