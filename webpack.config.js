const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaders = [{
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      MiniCssExtractPlugin.loader,
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
];

const plugins = [
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
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
  })
];

module.exports = {
  //mode: 'development',
  context: __dirname + '/src',
  entry: {
    main: './index.js',
    detail: './detail.js'
  },
  output: {
  //   path: path.resolve(__dirname, 'dist'),
     filename: '[name].[contenthash].js',
     clean: true
  },
  module: {
    rules: loaders,
  },
  plugins: plugins,
  optimization: {
    splitChunks: {
      maxSize: 102400
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true
    //   compress: true,
    //   port: 8080,
  },
};
