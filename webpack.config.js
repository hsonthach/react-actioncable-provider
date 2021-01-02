const path = require('path');

module.exports = {
  mode: 'production',
  entry: './lib/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'test'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
              "@babel/preset-env",
              {
                "targets": {
                  "esmodules": true
                }
              }
              ], "@babel/preset-react"
            ]
          }
        }
      }
    ]
  }
};