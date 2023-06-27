/**
 * @author Tanay Wagh <tanay.wagh@314ecorp.com>
 * @description typings
 */

type InputHTMLAttributes = import('react').InputHTMLAttributes<HTMLInputElement>;
type CSSProperties = import('react').CSSProperties;

interface ISliderProps extends Omit<InputHTMLAttributes, 'value' | 'min' | 'max' | 'onChange'> {
	value: number;
	min?: number;
	max?: number;
	onChange?: (value: number) => void;
}

interface Theme {
	theme?: CSSProperties;
}
