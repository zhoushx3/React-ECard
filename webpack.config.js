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
	external: {
		// '$': 'jquery',
		'React': 'react',
		'React-Dom': 'react-dom'
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
			test: /\.css/,
			loader: 'style-loader!css-loader'
		}, {
			test: /.html/,
			loader: 'html-loader',
		}, {
			test: /.jade/,
			loader: 'jade-loader'
		}]
	}
}