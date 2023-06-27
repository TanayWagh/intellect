/**
 * @author Tanay Wagh <tanay.wagh@314ecorp.com>
 * @description typings
 */

export interface ISliderProps {
	min: number;
	max: number;
	value?: number;
	step?: number;
	disabled?: boolean;
	onChange: (value: number) => void;
}
