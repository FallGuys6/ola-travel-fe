const path = require("path");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const webpackCommon = require("./webpack.config.common");



module.exports = merge(webpackCommon, {
    mode: "development",
    output:{
        asyncChunks: true,
        publicPath: "/", // deploy on server with /app/ folder name
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single'
    },
      // devtool: 'inline-source-map' find index bug
    devtool: "eval-cheap-module-source-map",
    devServer: {
        static: path.resolve(__dirname, './dist'),
        server: {
            type: 'http',
        },
        https: false,
        open: true,
        historyApiFallback: true,
        compress: true,
        allowedHosts: "auto",
        host: "localhost",
        port: 3333,
        liveReload: true,
        client: {
          overlay: {
            errors: true,
            warnings: false,
          },
          // progress: true,
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.AutomaticPrefetchPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
})