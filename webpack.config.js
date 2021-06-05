/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require("path");

const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  stats: "minimal",
  optimization: {
    minimize: false,
    concatenateModules: false,
  },
  performance: {
    // Turn off size warnings for entry points
    hints: false,
  },
  devtool: "inline-source-map",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: "babel-loader" },
          { loader: "ts-loader", options: { transpileOnly: true } },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    libraryTarget: "commonjs2",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};
