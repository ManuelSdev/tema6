
const path = require('path');


module.exports = {
  // mode: 'development',
  entry: ['./src/index.js', './src/details.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
};
