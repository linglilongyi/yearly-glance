# [2.0.0](https://github.com/Moyf/yearly-glance/compare/1.0.0...2.0.0) (2025-04-16)


### Bug Fixes

* Ensure consistent casing in file imports and update TypeScript configuration ([a1b32aa](https://github.com/Moyf/yearly-glance/commit/a1b32aa33bcb8d90033badc39acc3b018d393259))
* Update event type references for consistency ([5efd7c0](https://github.com/Moyf/yearly-glance/commit/5efd7c0ba1b8d751c9266327ac3e59b51b62486e))
* Improved the view layout to reduce the occurrence of uneven distribution

### Features

* **ColorSelector:** Add color selector component for event customization ([cfbf6ca](https://github.com/Moyf/yearly-glance/commit/cfbf6ca5e76a04d544233534e3511d1c2a225576))
* **confirm-dialog:** Implement ConfirmDialog component for event deletion confirmation ([24813f4](https://github.com/Moyf/yearly-glance/commit/24813f416a21fe695f2933fa7c1e48aa2330abdd))
* **EventForm:** Enhance event creation with additional properties, Automatically expand optional configurations when creating a new event ([c9b2943](https://github.com/Moyf/yearly-glance/commit/c9b2943e33e054679e85f07cb0f14c1b15fbe690))
* **EventManager:** Implement event search functionality and enhance tooltip actions ([93bc380](https://github.com/Moyf/yearly-glance/commit/93bc380db806cd0d2313e2ed071258a317090cd4))
* **EventTooltip:** Add date display functionality to event tooltip ([4d4e789](https://github.com/Moyf/yearly-glance/commit/4d4e789d6262717f5d6ce04a5e2986a65f68e9c5))
* **UUID:** Integrate UUID generation for event IDs and enhance event management ([17446e0](https://github.com/Moyf/yearly-glance/commit/17446e083d7883dc8d92f61b8621347dd48d9624))
* **YearlyCalendar:** Add view preset options and configuration handling ([ee19736](https://github.com/Moyf/yearly-glance/commit/ee19736dd352520459d6bc34a9e00ccfa7f538c1))
* Support adding events directly in the reading view
* The switch button for "height restriction" has been added
* Adjust the event order, change the default type to "Custom Event"
* Undefined emojis and colors will no longer be written to the data


### BREAKING CHANGES

* **version:** Adding UUIDs to all events may lead to the duplicate creation of built-in holidays in the system. You can manually delete them in data.json, or delete the data.json file and reset the plugin



# [1.0.0](https://github.com/Moyf/yearly-glance/compare/b9c8af98014bf9c4691feba8c83ee83fe1a0b43a...1.0.0) (2025-04-10)
