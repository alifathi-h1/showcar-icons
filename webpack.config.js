const path = require("path");

module.exports = {
  entry: "./src/icons.js",
  mode: "production",
  devtool: "source-map",
  devServer: {
    openPage: "./docs/index.html",
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /.*\.svg$/,
        use: [
          {
            loader: "raw-loader"
          },
          {
            loader: "svgo-loader",
            options: {
              plugins: [{ removeTitle: true }, { removeDimensions: true }, { removeComments: true }]
            }
          }
        ]
      },
      {
        test: /\.js$/,
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
  optimization: {
    minimize: true
  },
  output: { filename: "./showcar-icons.min.js" }
};
