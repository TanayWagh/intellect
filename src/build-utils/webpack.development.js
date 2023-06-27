/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Webpack Development config
 */

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		filename: 'bundle.js',
		chunkFilename: 'bundle.[name].js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		compress: true,
		historyApiFallback: true,
		port: 7000,
		client: {
			overlay: false,
			progress: true,
		},
	},
};
