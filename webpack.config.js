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
	debug: true,
	module: {
		loaders: [{
			test: /\.js/,
			loader: 'babel-loader',
			query: {
				presets: ['stage-0', 'es2015', 'react']
			}
		}, {
			test: /\.styl/,
			loader: 'style-loader!css-loader!stylus-loader'
		}, {
			test: /.html/,
			loader: 'html-loader',
		}]
	}
}