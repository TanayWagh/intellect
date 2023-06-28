/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Rate widget
 */

import React, { useState } from 'react';
import classnames from 'classnames';
import useRatingStyles from './useRatingStyles';

const count = 5;
const array = new Array(count).fill(0);

const Rating: React.FC<IRatingProps> = (props) => {
	const { value: propsValue, defaultValue, className, style, onChange } = props;

	const [value, setValue] = useState(propsValue ?? defaultValue ?? 0);
	const classes = useRatingStyles({ theme: style });

	const handleClick = (val: number) => {
		setValue(val);
		onChange?.(val);
	};

	return (
		<div className={classnames(classes.rateWrapper, className)}>
			<div className={classes.rate}>
				{array.map((__, index) => (
					<div
						key={index.toString()}
						className={classnames(`rate-${(index + 1).toString()}`, {
							selected: value >= count - index,
						})}
						onClick={() => handleClick(count - index)}
					/>
				))}
			</div>
			<div className='left-triangle' />
			<div className='right-triangle' />
		</div>
	);
};

export default Rating;
