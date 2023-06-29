/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description styles for rate widget
 */

import { createUseStyles } from 'react-jss';

const useRateStyles = createUseStyles<string, Theme>({
	rate: {
		height: ({ theme }) => theme?.height ?? '17rem',
		width: ({ theme }) => theme?.width ?? '14rem',
		display: 'flex',
		flexDirection: 'column',
		gap: '12px',
		alignItems: 'center',
		borderRadius: '6px',
		justifyContent: 'center',
		background: ({ theme }) => theme?.backgroundColor ?? 'rgb(72, 106, 129)',

		'& > div': {
			height: '25px',
			backgroundColor: '#acc1d0',
			borderRadius: '8px 8px 20px 20px',
			cursor: 'pointer',
		},

		'& .selected': {
			background: '#fff',
		},

		'& .hover': {
			background: '#fff',
		},

		'& .disabled': {
			cursor: 'not-allowed',
			pointerEvents: 'none',
		},

		'& .rate-1': {
			width: '77%',
		},

		'& .rate-2': {
			width: '60%',
		},

		'& .rate-3': {
			width: '45%',
		},

		'& .rate-4': {
			width: '30%',
		},

		'& .rate-5': {
			width: '15%',
		},
	},

	rateWrapper: {
		position: 'relative',
		alignSelf: 'center',

		'& .left-triangle': {
			position: 'absolute',
			top: '6px',
			pointerEvents: 'none',
			borderTop: '240px solid transparent',
			borderLeft: '118px solid rgb(72, 106, 129)',
		},

		'& .right-triangle': {
			position: 'absolute',
			top: '6px',
			right: 0,
			pointerEvents: 'none',
			borderTop: '240px solid transparent',
			borderRight: '118px solid rgb(72, 106, 129)',
		},
	},
});

export default useRateStyles;
