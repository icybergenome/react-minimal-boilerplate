const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [ 'ts-loader' ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ],
      },
        {
      
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
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
        test: /\.module\.s(a|c)ss$/,
          loader: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment 
              }
            },
          
          ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
      }
    ],

  },
  
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ],
  mode: "development",
  devtool: "source-map",
  devServer: {
    publicPath: "/",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
  }
};
