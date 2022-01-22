const path = require("path");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const webpackCommon = require("./webpack.config.common");

module.exports = {
    mode: "production",
    devtool: 'source-map',
    plugin: [
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
    ]
}