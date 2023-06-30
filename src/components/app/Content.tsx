/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description App Content
 */

import React from 'react';

import Rating from 'components/widgets/rating/Rating';
import Slider from 'components/widgets/slider/Slider';
import useTheme from 'components/theme/useTheme';
import useAppStyles from './useAppStyles';

const Content: React.FC = () => {
	const theme = useTheme(); // consuming global theme
	const classes = useAppStyles({ theme });

	return (
		<div className={classes.flexContainer}>
			<Slider min={0} max={10} defaultValue={5} />
			<Rating defaultValue={2} />
		</div>
	);
};

export default Content;
