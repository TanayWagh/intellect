/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Entry point of appplication
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

import lazy from 'components/app/Lazy';
import 'styles/index.css';
import ErrorBoundary from 'components/app/ErrorBoundary';

const LazyApp = lazy(() => import('./components/app/App') as any);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ErrorBoundary>
			<LazyApp />
		</ErrorBoundary>
	</React.StrictMode>,
);
