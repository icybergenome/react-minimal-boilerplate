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
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.s?css/i,
        use: ["style-loader", "css-loader?sourceMap=true", "sass-loader"]
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