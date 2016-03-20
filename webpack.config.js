var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: './src/index.jsx'
	},
	output: {
		filename: 'bundle.js',
		path: 'build',
		// publicPath: 'build'
	},
	alias: {
		'React': 'react',
		'React-Dom': 'react-dom'
	},
	external: {
		'$': 'jquery'
	},
	module: {
		loaders: [{
			test: /\.js/,
			loader: 'babel-loader',
			exclude: ['./node_modules'],
			query: {
				presets: ['stage-0', 'es2015', 'react']
			}
		}, {
			test: /\.styl/,
			loader: 'style-loader!css-loader!stylus-loader'
		}, {
			test: /.html/,
			loader: 'html-loader',
		}, {
			test: /.jade/,
			loader: 'jade-loader'
		}]
	}
}