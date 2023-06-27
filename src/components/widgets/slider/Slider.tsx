/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Slider Widget
 */

// library imports
import React, { useMemo, useState } from 'react';
import classnames from 'classnames';

// custom imports
import useSliderStyles from './useSliderStyles';

const Slider: React.FC<ISliderProps> = (props) => {
	const { min, max, value: propsValue, defaultValue, style, disabled, className, onChange, ...restProps } = props;

	const [value, setValue] = useState<number>(propsValue ?? defaultValue);
	const classes = useSliderStyles({ theme: style });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const changedValue = parseFloat(e.target.value);
		setValue(changedValue);
		onChange?.(changedValue);
	};

	const rotation = useMemo(() => {
		const end = max ?? 10;
		const start = min ?? 0;

		return (value / (end - start)) * 100;
	}, [value, max, min]);

	return (
		<div style={style} className={classnames(classes.sliderWrapper, className, { disabled })}>
			<div className={classes.circle1}>
				<div
					className={classes.circleBorder}
					style={{
						background: `conic-gradient(${style?.borderColor} ${rotation}%, ${style?.backgroundColor} 0deg)`,
					}}
				>
					<div className={classes.circle2}>
						<div className={classes.circle3}>{Math.floor(value)}</div>
					</div>
				</div>
			</div>
			<input
				type='range'
				min={min}
				max={max}
				value={value}
				disabled={disabled}
				className={classes.slider}
				onChange={handleChange}
				{...restProps}
			/>
		</div>
	);
};

export default Slider;

Slider.defaultProps = {
	min: 0,
	value: 5,
	max: 10,
	step: 0.01,
	style: {
		color: 'blue',
		borderColor: '#fff',
		height: '2rem',
		width: '2rem',
	},
};
