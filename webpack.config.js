const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html"
    })
  ],
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    publicPath: "/",
    historyApiFallback: true
  }
};