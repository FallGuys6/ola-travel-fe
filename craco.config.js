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
const TerserPlugin = require("terser-webpack-plugin");
const env = process.env.NODE_ENV;
const devMode = process.env.NODE_ENV !== "production";
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  reactScriptsVersion: "react-scripts",
  style: {
    css: {
      loaderOptions: (cssLoaderOptions, { env, paths }) => { return cssLoaderOptions; }
    },
    sass: {
      loaderOptions: (sassLoaderOptions, { env, paths }) => { return sassLoaderOptions; }
    },
    postcss:{
      loaderOptions: (postcssLoaderOptions, { env, paths }) => { return postcssLoaderOptions; }
    }
  },
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
    configure: (webpackConfig, { env, paths }) => { return webpackConfig; },
    plugins: [
      //Webpack build progress bar
      new WebpackBar({
        profile: true,
      }),
      //View the progress of packaging
      new SimpleProgressWebpackPlugin({
        name: "webpack run build....",
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? "[name].css" : "[name].[hash:6].css",
        chunkFilename: devMode ? "[id].css" : "[id].[hash:6].css",
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
          new TerserPlugin({
            test: /\.js(\?.*)?$/i,
            parallel: true,
            extractComments: "all",
            terserOptions: {
              mangle: {
                keep_fnames: false,
              },
              compress: {
                drop_console: true,
              },
            },
          }),
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
      runtimeChunk: true,
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: "all",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
          },
          vendor: {
            test: /node_modules/,
            chunks: "all",
            name: "vendor",
            priority: 10,
            enforce: true,
          },
          minSize: 30000,
          maxAsyncRequests: 5,
        },
      },
      removeAvailableModules: true,
      removeEmptyChunks: true,
      mergeDuplicateChunks: true,
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#FF4D4F" },
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
  devServer: {
    server: {
      type: "http",
    },
    historyApiFallback: true,
    compress: true,
    allowedHosts: "auto",
    port: 3002,
    liveReload: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    magicHtml: true,
  },
};
