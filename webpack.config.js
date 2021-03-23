//Usamos el paquete nativo de node
const path = require('path');

module.exports = {
    entry: ['./src/index.js', './src/details.js'],
    mode: 'production',
    //output: {
      //Le decimos que el path sea el mismo
    //  path: path.resolve(__dirname, 'dist'),
      //Pero con un nombre de archivo distinto: que sea index.js
   //   filename: 'index.js',
   // },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
  };
  