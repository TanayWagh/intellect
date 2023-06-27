/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Error boundary for application to catch the js errors to avoid breaking of UI
 */

import React, { PropsWithChildren, PureComponent } from 'react';

interface IErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends PureComponent<PropsWithChildren, IErrorBoundaryState> {
	constructor(props: PropsWithChildren) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(): IErrorBoundaryState {
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: React.ErrorInfo): void {
		console.error(error, info);
	}

	render(): JSX.Element | React.ReactNode {
		if (this.state.hasError) {
			return <h1>Something went wrong. Please contact the admin..</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
