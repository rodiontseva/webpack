const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Creates `style` nodes from JS strings
          // "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: 'images',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin(
      { filename: '[name].[contenthash].bundle.css', ignoreOrder: true }
    ),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new ImageminWebpWebpackPlugin(
      {
        config: [{
          test: /\.(jpe?g|png)/,
          options: {
            quality:  100
          }
        }],
        overrideExtension: true,
        detailedLogs: false,
        silent: false,
        strict: true
      }
    )
  ],
  mode: 'development',
}
