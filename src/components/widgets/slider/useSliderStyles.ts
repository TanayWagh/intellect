/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description styles for slider widget
 */

import { createUseStyles } from 'react-jss';

const useSliderStyles = createUseStyles<string, Theme>({
	circle1: {
		border: ({ theme }) => `1px dashed ${theme.borderColor}`,
		height: '12rem',
		width: '12rem',
		borderRadius: '50%',
		maxWidth: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle2: {
		height: '95%',
		borderRadius: '50%',
		width: '95%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: ({ theme }) => theme?.backgroundColor,
		filter: 'brightness(1.15)',
	},
	circleBorder: {
		height: '70%',
		borderRadius: '50%',
		width: '70%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle3: {
		height: '70%',
		color: ({ theme }) => theme?.borderColor,
		fontWeight: 600,
		fontSize: '2rem',
		borderRadius: '50%',
		width: '70%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundImage: 'url("skybg.png")',
	},
	sliderWrapper: {
		display: 'inline-grid',
		gap: '2rem',
		padding: '1rem',
		width: 'fit-content',
		background: ({ theme }) => theme?.backgroundColor ?? 'rgb(72, 106, 129)',
		borderRadius: ({ theme }) => theme?.borderRadius ?? '6px',
	},
});

export default useSliderStyles;
