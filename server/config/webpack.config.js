import webpack from 'webpack'
import path from 'path'

export default {
  devtool: 'inline-source-map',

  mode: "development",

  entry: [
    path.resolve(__dirname, '../views/js/map.js'),
    path.resolve(__dirname, '../views/js/main.js')
  ],

  output: {
    path: path.resolve(__dirname, '../views/js'),
    filename: 'bundle.js',
  },

  module: {
	  rules : [
  		{
  			test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["env", "react"] }
        }
  		}
	  ]
  }
}