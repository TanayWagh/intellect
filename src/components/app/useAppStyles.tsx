/**
 * @author Tanay Wagh <tanay.wagh@314ecorp.com>
 * @description App styles
 */

import { createUseStyles } from 'react-jss';

const useAppStyles = createUseStyles<string, Theme>({
	app: {
		background: '#486a81',
		borderRadius: '5px',
	},
});

export default useAppStyles;
