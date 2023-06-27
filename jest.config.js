/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description jest config
 */

const { defaults } = require('jest-config');

module.exports = {
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
	modulePaths: ['<rootDir>/src'],
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^components/(.*)$': '<rootDir>/src/components/$1',
	},
	transform: {
		'\\.[jt]sx?$': 'babel-jest',
	},
};
