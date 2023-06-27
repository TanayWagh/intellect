/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Webpack production config
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
	mode: 'production',
	output: {
		filename: 'assets/js/bundle.main.[contenthash:8].js',
		chunkFilename: 'assets/js/bundle.[name].[contenthash:8].js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
			},
		],
	},
	plugins: [
		new ProgressBarPlugin(),
		new MiniCssExtractPlugin({
			filename: 'assets/css/[name].[contenthash].css',
			chunkFilename: 'assets/css/[id].[contenthash].css',
		}),
	],
};
