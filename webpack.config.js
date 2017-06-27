const path = require('path');

module.exports = {
	entry: {
		App: "./app/scripts/App.js",
		Vendor: "./app/scripts/Vendor.js"
	},
	output: {
		path: path.resolve(__dirname, "./app/temp"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}