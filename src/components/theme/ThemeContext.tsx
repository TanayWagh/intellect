/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Theme context to use throughout the app
 */

import { createContext } from 'react';

const ThemeContext = createContext<CSSProperties>({});

export default ThemeContext;
