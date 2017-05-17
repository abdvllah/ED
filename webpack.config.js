const path = require('path');

module.exports = {
	entry: "./app/scripts/App.js",
	output: {
		path: path.resolve(__dirname, "./app/temp"),
		filename: "App.js"
	}
}