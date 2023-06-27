/**
 * @author Tanay Wagh <tanay.wagh@314ecorp.com>
 * @description Entry point of react application
 */

import React from 'react';

import Slider from '../widgets/Slider';

const App: React.FC = () => {
	const handleChange = (val: number) => {
		console.log(val);
	};

	return (
		<div>
			<Slider min={0} value={5} step={0.01} max={10} onChange={handleChange} />
		</div>
	);
};

export default App;
