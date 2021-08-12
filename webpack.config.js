const path = require('path');
const { readdirSync } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

let mode = process.env.NODE_ENV;

// get all subfolder from src directory
let packages = getDirectories(path.resolve(__dirname, 'src'));
let plugins = packages.filter(name => !name.startsWith('_')).map(name => (new HtmlWebpackPlugin({
	filename: `${name}.html`,
	template: path.resolve(__dirname, `src/${name}/index.html`),
	chunks: [`${name}`]
})));

// parse entry points
let entries = packages.reduce((acc,name) => {
	acc[name] = path.resolve(__dirname, `src/${name}/`);
	return acc;
}, {});

module.exports = {
	mode: mode,
	entry: {
		index: path.resolve(__dirname, `src/`),
		...entries
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'dist'),
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: `index.html`,
			template: path.resolve(__dirname, `src/index.html`),
			chunks: [`index`]
		}),
		...plugins
	],
	devServer: {
		contentBase: './dist',
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					'style-loader',
					'css-loader',
					"sass-loader"
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource' 
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}

}