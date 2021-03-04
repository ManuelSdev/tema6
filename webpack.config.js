const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // mode: 'development',
  context: __dirname + '/src',
  entry: {
    main: './index.js',
    detail: './detail.js'
  },
  output: {
  //   path: path.resolve(__dirname, 'dist'),
     filename: '[name].[contenthash].js',
  },
  module: {
    rules: [{
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      chunks:['main']
    }),
    new HtmlWebpackPlugin({
      template: 'detail.html',
      filename: 'detail.html',
      chunks: ['detail']
    }),

],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    //   compress: true,
    //   port: 8080,
  },
};
