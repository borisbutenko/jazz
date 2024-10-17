import HtmlWebpackPlugin from "html-webpack-plugin"

export default {
	devServer: {
		static: "./dist",
	},

	devtool: "inline-source-map",

	entry: {
		index: "./src/index.js",
	},

	mode: "development",

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader",
				],
			},
		],
	},

	optimization: {
		runtimeChunk: "single",
	},

	output: {
		clean: true,
		filename: "[name].js",
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
}
