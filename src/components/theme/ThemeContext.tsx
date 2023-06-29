/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Theme context to use throughout the app
 */

import { createContext } from 'react';

// A global theme context can be created which will be used to apply global styles to the child components
const ThemeContext = createContext<CSSProperties>({});

export default ThemeContext;
