/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Entry point of react application
 */

import React from 'react';

import Content from './Content';
import ThemeContext from 'components/theme/ThemeContext';
import theme from 'components/theme/theme';
import withAuthentication from 'components/auth/withAuthentication';

const App: React.FC = () => {
	return (
		<ThemeContext.Provider value={theme}>
			{/* Globally providing theme context on top level to be consumed by child components */}
			<section>
				{/* <Header />  // Header component as a possible addition in future*/}
				<Content />
			</section>
		</ThemeContext.Provider>
	);
};

export default withAuthentication(App); // Wrapped with withAuthentication HOC to incorporate authentication of user
