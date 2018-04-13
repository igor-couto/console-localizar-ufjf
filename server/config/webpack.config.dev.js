import webpack from 'webpack'
import path from 'path'

export default {
  devtool: 'inline-source-map',

  entry: [
    path.resolve(__dirname, '../views/js/main.js') 
  ],

  output: {
    path: path.resolve(__dirname, '../views/js'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
	  rules : [
		{
			test: /\.js$/,
			enforce: "pre",
	        loader: "babel-loader"
		}
	  ]
  }
/*
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: path.join(__dirname, '../server.js'),
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  }
*/


}