/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Entry point of react application
 */

import React, { useState } from 'react';

import Slider from 'components/widgets/slider/Slider';
import useAppStyles from './useAppStyles';

const App: React.FC = () => {
	const [value, setValue] = useState<number>(5);
	const classes = useAppStyles();

	const handleChange = (val: number) => {
		setValue(val);
	};

	return (
		<div className={classes.app}>
			<Slider
				value={value}
				min={0}
				disabled
				max={10}
				style={{ borderColor: '#fff', backgroundColor: '#486a81' }}
				onChange={handleChange}
			/>
		</div>
	);
};

export default App;
