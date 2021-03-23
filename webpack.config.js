//Usamos el paquete nativo de node
const path = require('path');

module.exports = {
    entry: {
      main: './src/index.js',
      detail: './src/detail.js'
    },
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
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ],
    },
    //mode: 'production',
    
    //output: {
      //Le decimos que el path sea el mismo
    //  path: path.resolve(__dirname, 'dist'),
      //Pero con un nombre de archivo distinto: que sea index.js
      //filename: 'main.js',
   // },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
  };
  