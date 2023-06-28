/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Entry point of react application
 */

import React from 'react';

import Content from './Content';
import withAuthentication from 'components/auth/withAuthentication';

const App: React.FC = () => {
	return (
		<section>
			{/* <Header /> */}
			<Content />
		</section>
	);
};

export default withAuthentication(App);
