const path = require("path");
const { when, whenDev, whenProd } = require("@craco/craco");
const CracoLessPlugin = require("craco-less");
const CracoAntDesignPlugin = require("craco-antd");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const CleanCSSPlugin = require("less-plugin-clean-css");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
const WebpackBar = require("webpackbar");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = process.env.NODE_ENV;
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  reactScriptsVersion: "react-scripts",
  //Config webpack
  webpack: {
    //Alias configuration
    alias: {
      "@": pathResolve("."),
      src: pathResolve("src"),
      assets: pathResolve("src/assets"),
      components: pathResolve("src/components"),
      hooks: pathResolve("src/hooks"),
      pages: pathResolve("src/pages"),
      store: pathResolve("src/store"),
      utils: pathResolve("src/utilities"),
    },
    plugins: [
      //Webpack build progress bar
      new WebpackBar({
        profile: true,
      }),
      //View the progress of packaging
      new SimpleProgressWebpackPlugin({
        name: "webpack run build....",
      }),
      ...whenDev(
        () => [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.AutomaticPrefetchPlugin(),
          new webpack.NoEmitOnErrorsPlugin(),
        ],
        []
      ),
      ...whenProd(
        () => [
          new MiniCssExtractPlugin({
            filename: "[name].[hash:6].css" ,
            chunkFilename: "[id].[hash:6].css",
          }),
          new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 30,
          }),
          new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 10000,
          }),
          new webpack.ids.HashedModuleIdsPlugin({
            context: path.resolve(__dirname),
            hashFunction: "sha256",
            hashDigest: "hex",
            hashDigestLength: 20,
          }),
          new webpack.optimize.ModuleConcatenationPlugin(),
          new CompressionWebpackPlugin({
            algorithm: "gzip",
            test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
            threshold: 1024,
            minRatio: 0.8,
          }),
        ],
        []
      ),
    ],
    //Extract common module
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: 'initial',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0
          },
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            priority: 10,
            enforce: true
          }
        }
      }
    },
  },

  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
            paths: [path.resolve(__dirname, "node_modules")],
            plugins: [new CleanCSSPlugin({ advanced: true })],
          },
        },
        babelPluginImportOptions: {
          libraryDirectory: "lib",
        },
      },
    },
  ],
};
