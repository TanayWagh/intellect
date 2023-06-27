const path = require('path');
const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const modeConfig = (mode) => require(`./src/build-utils/webpack.${mode}`);

module.exports = (props) => {
	let mode = 'production';
	if (props?.development) {
		mode = 'development';
	}

	return merge(
		{
			entry: path.join(__dirname, 'src/index.tsx'),
			output: {
				path: path.join(__dirname, '/dist'),
				assetModuleFilename: 'assets/img/[hash][ext][query]',
			},
			module: {
				rules: [
					{
						test: /\.(ts|tsx)$/,
						loader: 'ts-loader',
					},
				],
			},
			plugins: [
				new CleanWebpackPlugin(),
				new CopyWebpackPlugin({
					patterns: ['public'].map((file) => ({
						from: path.resolve(file),
						to: path.resolve(`dist`),
					})),
				}),
				new HtmlWebpackPlugin({
					filename: 'index.html',
					template: 'index.html',
				}),
			],
			resolve: {
				alias: {
					components: path.resolve(__dirname, 'src/components/'),
					styles: path.resolve(__dirname, 'src/styles/'),
				},
				extensions: ['.tsx', '.ts', '.js', '.json', '.svg'],
			},
			target: 'web',
		},
		modeConfig(mode),
	);
};
