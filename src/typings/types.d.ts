/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
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

type TFactory = () => Promise<{
	default: React.ComponentType<unknown>;
}>;
