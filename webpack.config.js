const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
			},
			{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
	},
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:5000"
    }
  },
  plugins: [
		new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
			title: "Output management",
      template: "./src/client/public/index.html",
      favicon: "./src/client/public/favicon.ico"
    })
  ]
};