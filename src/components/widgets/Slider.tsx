/**
 * @author Tanay Wagh <tanay.wagh@314ecorp.com>
 * @description Slider Widget
 */

import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import { ISliderProps } from 'src/typings/types';

const useStyles = createUseStyles({
	circle1: {
		border: '1px dashed red',
		height: '200px',
		borderRadius: '50%',

		width: '200px',
		maxWidth: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle2: {
		border: '1px solid red',
		height: '80%',
		borderRadius: '50%',
		width: '80%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle3: {
		border: '1px solid red',
		height: '80%',
		borderRadius: '50%',
		width: '80%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	slider: {
		width: '100%',
	},
	sliderWrapper: {
		display: 'inline-grid',
		gap: '2rem',
		padding: '1rem',
		width: 'fit-content',
	},
});

const Slider: React.FC<ISliderProps> = (props) => {
	const { min, max, step, value: propsValue, disabled, onChange } = props;
	const [value, setValue] = useState(propsValue);
	const classes = useStyles();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const changedValue = parseFloat(e.target.value);
		setValue(changedValue);
		onChange?.(changedValue);
	};

	return (
		<div className={classes.sliderWrapper}>
			<div className={classes.circle1}>
				<div className={classes.circle2}>
					<div className={classes.circle3}>{value}</div>
				</div>
			</div>
			<input
				type='range'
				min={min}
				max={max}
				step={step}
				value={value}
				disabled={disabled}
				className='slider'
				onChange={handleChange}
			/>
		</div>
	);
};

export default Slider;
