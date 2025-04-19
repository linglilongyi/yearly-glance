import { Lunar, Solar } from "lunar-typescript";
import { Birthday, CustomEvent, Holiday } from "@/src/core/interfaces/Events";
import { isValidLunarDate, parseDateValue } from "./dateParser";
import { getBirthdayTranslation } from "../data/birthday";

// 计算当前选择年份下时间的的公历日期
export function calculateDateObj(
	date: string,
	dateType: "SOLAR" | "LUNAR",
	yearSelected: number,
	isRepeat?: boolean
): string[] {
	if (!date) {
		return [];
	}

	const { hasYear, year, month, day } = parseDateValue(date, dateType);

	const monthAbs = Math.abs(month);

	// 自定义事件一般ymd齐全，在事件不重复的情况下，使用date本身的year
	if (isRepeat === false && hasYear) {
		if (dateType === "SOLAR") {
			const solar = Solar.fromYmd(year!, month, day);
			return [solar.toString()];
		} else if (dateType === "LUNAR") {
			const lunar = Lunar.fromYmd(year!, monthAbs, day);
			if (lunar.getSolar().getYear() === yearSelected) {
				return [lunar.getSolar().toString()];
			} else {
				return [];
			}
		} else {
			return [];
		}
	}

	// 对于节日和生日，均忽略date本身的year，而使用yearSelected
	if (dateType === "SOLAR") {
		const solar = Solar.fromYmd(yearSelected, month, day);
		return [solar.toString()];
	} else if (dateType === "LUNAR") {
		const lunarArr: string[] = [];
		const lunar = Lunar.fromYmd(yearSelected, monthAbs, day);
		const lastLunar = Lunar.fromYmd(yearSelected - 1, monthAbs, day);
		if (lunar.getSolar().getYear() === yearSelected) {
			lunarArr.push(lunar.getSolar().toString());
		}
		if (lastLunar.getSolar().getYear() === yearSelected) {
			lunarArr.push(lastLunar.getSolar().toString());
		}
		return lunarArr;
	} else {
		return [];
	}
}

export function updateHolidaysInfo(holidays: Holiday[], yearSelected: number) {
	return holidays.map((holiday) => updateHolidayInfo(holiday, yearSelected));
}

function updateHolidayInfo(holiday: Holiday, yearSelected: number) {
	const { date, dateType } = holiday;
	const dateObj = calculateDateObj(date, dateType, yearSelected);

	return {
		...holiday,
		dateObj,
	};
}

export function updateCustomEventsInfo(
	customEvents: CustomEvent[],
	yearSelected: number
) {
	return customEvents.map((customEvent) =>
		updateCustomEventInfo(customEvent, yearSelected)
	);
}

function updateCustomEventInfo(customEvent: CustomEvent, yearSelected: number) {
	const { date, dateType, isRepeat } = customEvent;
	const dateObj = calculateDateObj(date, dateType, yearSelected, isRepeat);

	return {
		...customEvent,
		dateObj,
	};
}

export function updateBirthdaysInfo(
	birthdays: Birthday[],
	yearSelected: number
) {
	return birthdays.map((birthday) =>
		updateBirthdayInfo(birthday, yearSelected)
	);
}

export function updateBirthdayInfo(birthday: Birthday, yearSelected: number) {
	const { date, dateType } = birthday;

	const { Ld, Sd, hasYear, year, month, day } = parseDateValue(
		date,
		dateType
	);

	const dateObj = calculateDateObj(date, dateType, yearSelected);
	// 当前时间
	const todaySolar = Solar.fromDate(new Date());

	let nextBirthday;
	if (dateType === "SOLAR") {
		// 计算下一次阳历生日
		const thisBirthday = Solar.fromYmd(todaySolar.getYear(), month, day);
		if (todaySolar.isBefore(thisBirthday)) {
			// 今年的生日还没到
			nextBirthday = thisBirthday.toString();
		} else {
			// 今年的生日已过，计算明年的生日
			nextBirthday = Solar.fromYmd(
				todaySolar.getYear() + 1,
				month,
				day
			).toString();
		}
	} else if (dateType === "LUNAR") {
		// 计算当前阴历年对应的生日
		let thisBirthday;
		if (isValidLunarDate(todaySolar.getYear(), Math.abs(month), day)) {
			thisBirthday = Lunar.fromYmd(
				todaySolar.getYear(),
				Math.abs(month),
				day
			).getSolar();
		} else {
			thisBirthday = Lunar.fromYmd(
				todaySolar.getYear(),
				Math.abs(month),
				day - 1
			).getSolar();
		}

		// 计算下一个阴历年对应的生日
		let nextYearBirthday;
		if (isValidLunarDate(todaySolar.getYear() + 1, Math.abs(month), day)) {
			nextYearBirthday = Lunar.fromYmd(
				todaySolar.getYear() + 1,
				Math.abs(month),
				day
			).getSolar();
		} else {
			nextYearBirthday = Lunar.fromYmd(
				todaySolar.getYear() + 1,
				Math.abs(month),
				day - 1
			).getSolar();
		}

		// 判断应该使用哪一个
		if (todaySolar.isBefore(thisBirthday)) {
			// 如果今年的农历生日还没到，使用今年的
			nextBirthday = thisBirthday.toString();
		} else {
			// 如果今年的农历生日已过，使用明年的
			nextBirthday = nextYearBirthday.toString();
		}
	}

	let age;
	let animal;
	let zodiac;
	let dateObjSolar;

	if (hasYear) {
		// 当前时间下生日的日期(无关yearSelected)
		if (dateType === "SOLAR") {
			dateObjSolar = Solar.fromYmd(todaySolar.getYear(), month, day);
		} else if (dateType === "LUNAR") {
			if (isValidLunarDate(todaySolar.getYear(), Math.abs(month), day)) {
				dateObjSolar = Lunar.fromYmd(
					todaySolar.getYear(),
					Math.abs(month),
					day
				).getSolar();
			} else {
				dateObjSolar = Lunar.fromYmd(
					todaySolar.getYear(),
					Math.abs(month),
					day - 1
				).getSolar();
			}
		}
		// 当今天还未过生日时，年龄为当前年份减去出生年份再减1
		age = todaySolar.isBefore(dateObjSolar)
			? todaySolar.getYear() - year! - 1
			: todaySolar.getYear() - year!;

		// 获取干支纪年（新年以正月初一起算）
		const ganzhi = Ld?.getYearInGanZhi();

		// 使用新的翻译函数，简化代码
		animal =
			getBirthdayTranslation(ganzhi, "ganzhi") +
			getBirthdayTranslation(Ld?.getYearShengXiao(), "animal");
		zodiac = getBirthdayTranslation(Sd?.getXingZuo(), "zodiac");
	} else {
		age = getBirthdayTranslation(undefined, "age");
		animal = getBirthdayTranslation(undefined, "animal");
		zodiac = getBirthdayTranslation(
			Solar.fromYmd(yearSelected, month, day).getXingZuo(),
			"zodiac"
		);
	}

	return {
		...birthday,
		dateObj,
		nextBirthday,
		...(age !== undefined && { age }),
		...(animal !== undefined && { animal }),
		...(zodiac !== undefined && { zodiac }),
	};
}
