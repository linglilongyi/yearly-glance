import * as React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Select, SelectOption } from "../Base/Select";
import "./style/DateSelector.css";

interface DateSelectorProps {
	value: any;
	onChange: (value: string) => void;
	options: SelectOption[];
	type: "year" | "month" | "day";
	className?: string;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
	value,
	onChange,
	options,
	type,
	className = "",
}) => {
	const handleDecrease = () => {
		const currentIndex = options.findIndex(
			(option) => option.value === value
		);
		const newIndex =
			currentIndex > 0 ? currentIndex - 1 : options.length - 1;
		const newValue = options[newIndex].value;
		onChange(newValue);
	};

	const handleIncrease = () => {
		const currentIndex = options.findIndex(
			(option) => option.value === value
		);
		const newIndex =
			currentIndex < options.length - 1 ? currentIndex + 1 : 0;
		const newValue = options[newIndex].value;
		onChange(newValue);
	};

	const handleSelectChange = (newValue: any) => {
		onChange(newValue);
	};

	return (
		<div className={`yg-date-selector ${className}`}>
			<div className="yg-date-selector-select">
				<Select
					value={value}
					onValueChange={handleSelectChange}
					options={options}
					placeholder={`Select ${type}`}
				/>
			</div>

			<div className="yg-date-selector-arrows">
				<span
					className="yg-date-selector-arrow yg-date-selector-prev"
					onClick={handleDecrease}
					aria-label={`Previous ${type}`}
				>
					<ChevronUp size={18} />
				</span>
				<span
					className="yg-date-selector-arrow yg-date-selector-next"
					onClick={handleIncrease}
					aria-label={`Next ${type}`}
				>
					<ChevronDown size={18} />
				</span>
			</div>
		</div>
	);
};
