/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description typings
 */

type InputHTMLAttributes = import('react').InputHTMLAttributes<HTMLInputElement>;
type CSSProperties = import('react').CSSProperties;

interface ISliderProps extends Omit<InputHTMLAttributes, 'value' | 'min' | 'max' | 'defaultValue' | 'onChange'> {
	value?: number;
	min?: number;
	max?: number;
	defaultValue?: number;
	onChange?: (value: number) => void;
}

interface IRatingProps {
	value?: number;
	defaultValue?: number;
	className?: string;
	style?: CSSProperties;
	onChange?: (value: number) => void;
}

interface Theme {
	theme?: CSSProperties;
}

type TFactory = () => Promise<{
	default: React.ComponentType<unknown>;
}>;

interface IErrorBoundaryState {
	hasError: boolean;
}
