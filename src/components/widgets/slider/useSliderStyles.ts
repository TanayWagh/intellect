/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description styles for slider widget
 */

import { createUseStyles } from 'react-jss';

const useSliderStyles = createUseStyles<string, Theme>({
	circle1: {
		border: ({ theme }) => `1px dashed ${theme.borderColor}`,
		height: ({ theme }) => theme.height ?? '12rem',
		width: ({ theme }) => theme.width ?? '12rem',
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
		background: ({ theme }) => theme.backgroundColor,
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
		color: ({ theme }) => theme.borderColor,
		fontWeight: 600,
		fontSize: '2rem',
		borderRadius: '50%',
		width: '70%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundImage: 'url("skybg.png")',
	},
	slider: {
		'&::-webkit-slider-thumb': {
			'-webkit-appearance': 'none',
			appearance: 'none',
			width: '15px',
			borderRadius: '50%',
			height: '15px',
			background: ({ theme }) => theme.borderColor,
			cursor: 'pointer',
		},
	},
	sliderWrapper: {
		display: 'inline-grid',
		gap: '2rem',
		padding: '1rem',
		borderRadius: '6px',
		width: 'fit-content',
	},
});

export default useSliderStyles;
