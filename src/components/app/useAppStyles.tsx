/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description App styles
 */

import { createUseStyles } from 'react-jss';

const useAppStyles = createUseStyles<string, Theme>({
	app: {
		border: '1px solid #cfcece',
		borderRadius: '6px',
		padding: '20px',
	},
});

export default useAppStyles;
