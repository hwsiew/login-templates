const path = require('path');
const { readdirSync } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

let packages = getDirectories(path.resolve(__dirname, 'src'));
let plugins = packages.map(name => (new HtmlWebpackPlugin({
	filename: `${name}.html`,
	template: path.resolve(__dirname, `src/${name}/index.html`),
	chunks: [`${name}`]
})));

module.exports = {
	mode: 'development',
	entry: {
		'neumorphism':  path.resolve(__dirname, 'src/neumorphism/')
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'dist'),
		clean: true
	},
	plugins: plugins,
	module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					'style-loader',
					'css-loader',
					"sass-loader"
				]
			}
		]
	}

}