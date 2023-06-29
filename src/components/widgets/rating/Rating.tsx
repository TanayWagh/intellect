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
	const { value: propsValue, defaultValue, disabled, className, style, onChange } = props;

	const [value, setValue] = useState(propsValue ?? defaultValue ?? 0); // to maintain the value state
	const [hoverValue, setHoverValue] = useState<number | null>(null); // not necessary. Used show hover effect on div hover

	const classes = useRatingStyles({ theme: style });

	const handleClick = (val: number) => {
		setValue(val);
		onChange?.(val);
	};

	const handleMouseEnter = (val: number) => {
		setHoverValue(val);
	};

	const handleMouseLeave = () => {
		setHoverValue(null);
	};

	return (
		<div className={classnames(classes.rateWrapper, className, { disabled })}>
			<div className={`${classes.rate} jest-testing`}>
				{/* classname "jest-testing" added for testing purpose */}
				{array.map((__, index) => (
					<div
						key={index.toString()}
						className={classnames(`rate-${(index + 1).toString()}`, {
							selected: value >= count - index,
							hover: hoverValue && hoverValue >= count - index,
							disabled,
						})}
						onClick={() => handleClick(count - index)}
						onMouseEnter={() => handleMouseEnter(count - index)}
						onMouseLeave={handleMouseLeave}
					/>
				))}
			</div>
			<div className='left-triangle' />
			<div className='right-triangle' />
		</div>
	);
};

export default Rating;

Rating.defaultProps = {
	defaultValue: 2,
};
