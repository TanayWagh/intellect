/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description App Content
 */

import React from 'react';

import Rating from 'components/widgets/rating/Rating';
import Slider from 'components/widgets/slider/Slider';
import useAppStyles from './useAppStyles';

const style = { borderColor: '#fff', backgroundColor: '#486a81', borderRadius: '6px' }; // can be used from global theme context
const Content: React.FC = () => {
	const classes = useAppStyles({ theme: style });

	return (
		<div className={classes.flexContainer}>
			<Slider min={0} max={10} defaultValue={5} style={style} />
			<Rating defaultValue={2} />
		</div>
	);
};

export default Content;
