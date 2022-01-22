const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const globImporter = require("node-sass-glob-importer");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CleanCSSPlugin = require("less-plugin-clean-css");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const { loader } = require("image-minimizer-webpack-plugin");
const env = process.env.NODE_ENV

function pathResolveJoin(pathUrl) {

  console.log("path join: ", pathUrl, env);
  return path.join(__dirname, pathUrl);
}

function pathResolveResole(pathUrl) {
  console.log("path resolve: ", pathUrl, env);
  return path.resolve(__dirname, pathUrl);
}

module.exports = {
  entry: {
    main: pathResolveJoin("/src/index.js"),
  },
  resolve: {
    alias: {
      src: pathResolveResole("./src"),
      "@": pathResolveResole("./src"),
    },
    modules: [pathResolveResole("./src"), "node_modules"],
    byDependency: {
      less: {
        mainFiles: ["custom"],
      },
    },
    extensions: [
      ".web.js",
      ".mjs",
      ".js",
      ".json",
      ".web.jsx",
      ".jsx",
      ".less",
    ],
  },
  // tối ưu hiệu năng load của client, cache lại các file js không có sự update, như jquery, loadash
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
        },
      },
      chunks: "all",
    },
    mergeDuplicateChunks: true,
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true,
        minify: CssMinimizerPlugin.cleanCssMinify,
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: {
                removeAll: devMode ? false : true,
              },
            },
          ],
        },
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
            ],
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              import: true,
              url: true,
              esModule: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: function () {
                  return [require("autoprefixer")];
                },
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: function () {
                  return [require("autoprefixer")];
                },
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              implementation: require.resolve("sass"),
              sassOptions: {
                importer: globImporter(),
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              import: true,
              url: true,
              esModule: true,
            },
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
              implementation: require("less"),
              webpackImporter: true,
              lessOptions: {
                modifyVars: {
                  'root-entry-name': 'default'
                },
                javascriptEnabled: true,
                paths: [path.resolve(__dirname, "node_modules")],
                plugins: [new CleanCSSPlugin({ advanced: true })],
              },
            },
          },
          {
            loader: "js-to-styles-var-loader",
          }
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/i,
        exclude: /node_modules/,
        // type: "asset",
        use: [
          {
            loader: "url-loader",
            options: {
              fallback: "file-loader",
              limit: 10000,
              context: pathResolveJoin("/src/"),
              name: "[path][name].[ext]",
              useRelativePath: true,
            },
          },
        ],
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: ["json-loader"],
        type: "javascript/auto",
      },
    ],
  },

  plugins: [
    new webpack.optimize.SideEffectsFlagPlugin(),
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash:6].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash:6].css",
    }),
    new HtmlWebpackPlugin({
      template: pathResolveResole("./src/index.html"),
      filename: "index.html",
      inject: "body",
      minify: devMode ? false : true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: pathResolveJoin("/src/public/"),
          to: pathResolveJoin("/dist"),
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
};
