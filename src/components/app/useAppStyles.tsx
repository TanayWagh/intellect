/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description App styles
 */

import { createUseStyles } from 'react-jss';

const useAppStyles = createUseStyles<string, Theme>({
	flexContainer: {
		display: 'flex',
		width: '40rem',
		justifyContent: 'space-between',
		border: ({ theme }) => `1px solid ${theme.borderColor ?? '#cfcece'}`,
		borderRadius: ({ theme }) => theme?.borderRadius ?? '6px',
		padding: '20px',
		backgroundColor: '#f6f6f6',

		'@media (max-width: 720px)': {
			display: 'flex',
			flexDirection: 'column',
			width: 'auto',
			gap: '50px',
		},
	},
});

export default useAppStyles;
