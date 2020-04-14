const path = require('path');

module.exports = {

  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'

  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  //todas as vezes que encontrar um arquivo javascript, que não esteja dentro 
  //da pasta node_modules, converte ele para mim
  module: {
    rules: [
      {
        test: /\.js$/, //transpilar todo arquivo que termine com .js
        exclude: /node_modules/, //não transpilar arquivos da node_modules
        use: {
          loader: 'babel-loader', //use o babel-loader para transpilar
        }
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' }, //pegar o css interpretado pelo css-loader e vai injetar dentro do html
          { loader: 'css-loader' }, //ler e interpreta arquivos css e importações de imagens...
        ]
      },

      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          { loader: 'file-loader' }, //pegar arquivo
        ]
      }

    ]
  },
};