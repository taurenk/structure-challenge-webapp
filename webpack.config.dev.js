const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css/, loaders: ['style-loader', 'css-loader'], include: __dirname + '/src/' },
      { test: /\.css/, loaders: ['style-loader', 'css-loader'], include: __dirname + '/node_modules/' },
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  resolve: {}
};
