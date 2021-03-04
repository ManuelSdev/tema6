
const path = require('path');


module.exports = {
  // mode: 'development',
  entry: {
    main: './src/index.js',
    detail: './src/detail.js'
  },
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'main.js'
  // },
  module: {
    rules: [
      {
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
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 8080,
  },
};