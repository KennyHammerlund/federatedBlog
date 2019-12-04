const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
// const HtmlWebPackPlugin = require("html-webpack-plugin")
module.exports = {
  entry: {
    server: "./src/index.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  target: "node",
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false, // if you don't put this is, __dirname
    __filename: false // and __filename return blank or /
  },
  resolve: {
    extensions: ['.js', '.graphql', '.gql'],
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.js?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: [["env", { modules: false }], "stage-0"],
              plugins: ["transform-regenerator", "transform-runtime"]
            }
          }
        ]
      }
    ]
  },
  plugins: []
};
