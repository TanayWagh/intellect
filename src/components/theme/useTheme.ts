/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Hook to use the theme context
 */

import { useContext } from 'react';

import ThemeContext from './ThemeContext';

const useTheme = (): CSSProperties => {
	return useContext(ThemeContext);
};

export default useTheme;
