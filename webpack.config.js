var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: './src/index.jsx',
		viewer: './src/index2.jsx'
	},
	output: {
		filename: '[name].[hash].bundle.js',
		path: 'build',
		// publicPath: 'build'
	},
	externals: {
		'jquery': 'jQuery',
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
		}, {
			test: /\.(woff|woff2)(\?)?/,
			loader: "url-loader?limit=10000&mimetype=application/font-woff"
		}, {
      test: /\.ttf(\?)?/,
			loader: "url-loader?limit=10000&mimetype=application/octet-stream"
		}, {
      test: /\.eot(\?)?/,
			loader: "file-loader"
		}, {
			test: /\.svg$/,
			loader: "url-loader?limit=10000&mimetype=image/svg+xml" 
		}]
	},
	plugins: [new HtmlWebpackPlugin({
		template: './index.html',
		filename: 'index.html',
		inject: 'body',
		chunks: ['main'],
		cache: false
	}), new HtmlWebpackPlugin({
		template: './viewer.html',
		filename: 'viewer.html',
		inject: 'body',
		chunks: ['viewer'],
		cache: false
	})]
}