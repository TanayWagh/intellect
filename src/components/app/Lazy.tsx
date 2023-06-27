/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Lazy Component to lazily load bundle chunks and code splitting
 */

import React from 'react';

interface IProps {}

const lazy = (factory: TFactory): React.FC => {
	const Component = React.lazy(factory);

	const LazyComponent: React.FC<IProps> = (props) => {
		return (
			<React.Suspense fallback='Taking longer than expected...'>
				<Component {...props} />
			</React.Suspense>
		);
	};

	return LazyComponent;
};

export default lazy;
