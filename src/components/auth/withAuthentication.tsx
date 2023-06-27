/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Higher order component to check user authentication
 */

import React, { useEffect, useState } from 'react';

const LazyLoginPage = React.lazy(() => import('components/auth/LoginPage')); // lazily loads login page

const withAuthentication = (Component: React.JSXElementConstructor<{}>): React.FC => {
	const Providers: React.FC = () => {
		const [isAuthenticated, setIsAuthenticated] = useState(false);
		const [showLogin, setShowLogin] = useState(false);

		useEffect(() => {
			// isAuthenticated and showLogin will be initially false on mount. In actual web application, we will update these values to true/false based on authentication response.
			// If user is not yet authenticated, we will redirect him/her to login page
			setIsAuthenticated(true);
			setShowLogin(false);
		}, []);

		if (showLogin) {
			return <LazyLoginPage />;
		}

		return isAuthenticated ? <Component /> : <span>Authenticating...</span>;
	};

	return Providers;
};

export default withAuthentication;
