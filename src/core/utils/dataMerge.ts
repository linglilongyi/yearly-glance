import { YearlyGlanceConfig } from "../interfaces/types";

/**
 * 数据迁移工具：将配置数据升级到最新版本
 * @param savedData 从存储中加载的原始数据
 * @returns 迁移后的数据
 */
export function migrateData(savedData: YearlyGlanceConfig): YearlyGlanceConfig {
	if (!savedData) return savedData;

	// 创建数据的深拷贝，避免修改原始数据
	const migratedData = structuredClone(savedData);

	// 执行各种迁移操作
	migrateHolidayTypes(migratedData.data);
	migrateDateObjToDateArr(migratedData.data);

	return migratedData;
}

/**
 * 将节日类型从 INTERNAT 迁移到 BUILTIN
 * @param data 需要迁移的数据
 */
function migrateHolidayTypes(data: YearlyGlanceConfig["data"]): void {
	// 确保数据结构存在
	if (!data?.holidays || !Array.isArray(data.holidays)) {
		return;
	}

	// 遍历所有节日，替换类型
	for (const holiday of data.holidays) {
		// 使用类型断言解决类型不兼容问题
		// 因为我们正在处理的是旧版数据，可能包含不在当前类型定义中的值
		if ((holiday as { type: string }).type === "INTERNAT") {
			console.debug(
				`[yearly-glance] 迁移节日类型: ${holiday.text} (INTERNAT -> BUILTIN)`
			);
			holiday.type = "BUILTIN";
		}
	}
}

/**
 * 将 BaseEvent 中的 dateObj 字段迁移为 dateArr
 * @param data 需要迁移的数据
 */
function migrateDateObjToDateArr(data: YearlyGlanceConfig["data"]): void {
	// 确保数据结构存在
	if (!data) {
		return;
	}

	// 需要迁移的事件类型数组
	const eventTypes = ["birthdays", "holidays", "customEvents"];

	// 遍历所有事件类型
	for (const type of eventTypes) {
		if (!data[type] || !Array.isArray(data[type])) {
			continue;
		}

		// 遍历该类型的所有事件
		for (const event of data[type]) {
			if (event.dateObj) {
				// 删除原有的 dateObj 字段
				delete event.dateObj;
			}
		}
	}
}
