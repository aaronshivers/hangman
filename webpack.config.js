const path = require('path')

module.exports = env => {
  console.log(env)

  return {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist')
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      publicPath: '/dist/'
    },
    devtool: 'source-map'
  }
}