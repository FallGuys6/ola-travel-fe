const path = require('path');
const { when, whenDev, whenProd } = require('@craco/craco');
const CracoLessPlugin = require('craco-less');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const CleanCSSPlugin = require('less-plugin-clean-css');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const WebpackBar = require('webpackbar');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');
const env = process.env.NODE_ENV;
const devMode = process.env.NODE_ENV !== 'production';
const pathJoin = pathUrl => path.join(__dirname, pathUrl);
const pathResolve = pathUrl => path.resolve(__dirname, pathUrl);
module.exports = {
  reactScriptsVersion: 'react-scripts',

  // Config webpack
  webpack: {
    //Alias configuration
    alias: {
      '@': pathJoin('.'),
      '@apis': pathJoin('src/apis'),
      '@src': pathJoin('./src'),
      '@assets': pathJoin('./src/assets'),
      '@components': pathJoin('./src/components'),
      '@hooks': pathJoin('./src/hooks'),
      '@pages': pathJoin('./src/pages'),
      '@utils': pathJoin('./src/utilities'),
      '@layouts': pathJoin('./src/layouts'),
      '@app': pathJoin('./src/app'),
      '@configs': pathJoin('./src/configs'),
      '@models': pathJoin('./src/models'),
      '@routers': pathJoin('./src/routers'),
      '@features': pathJoin('./src/features'),
      '@constants': pathJoin('./src/constants'),
    },
    configure: (webpackConfig={
      resolve: {
        extensions: ['.js', '.jsx', '.less', '.tsx', '.json', '.css', '.scss', '.sass'],
        modules: [pathJoin('./src'), 'node_modules'],
      },
      devtool: 'source-map',
      module: {
        rules: [
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              {
                loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
              },
              {
                loader: 'css-loader',
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: function () {
                      return [
                        require('autoprefixer')
                      ];
                    },
                    parser: "postcss-js",
                  },
                  execute: true,
                  sourceMap: true,
                  implementation: require.resolve("postcss")
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    importer: globImporter(),
                  },
                },
              }
            ],
          },
          {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: '@svgr/webpack',
                options: {
                  babel: false,
                  icon: true,
                },
              },
            ],
          },
          {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|otf|webp|web|mov|mp4|jpeg|mov)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  fallback: 'file-loader',
                  limit: false,
                  generator: content => svgToMiniDataURI(content.toString()),
                  name: "[path][name].[ext]",
                  useRelativePath: true,
                },
              },
            ],
            type: 'javascript/auto',
          },
          {
            test: /\.html$/i,
            use:[
              {
                loader: "html-loader",
                options: {
                  attrs:[":src"],
                  minimize: {
                    caseSensitive: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    keepClosingSlash: true,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                  },
                }
              }
            ]
          },
          {
            test: /\.json$/,
            exclude: /node_modules/,
            use: ['json-loader'],
            type: 'javascript/auto',
          },
        ],
      },
      //Extract common module
      optimization: {
        namedModules: true,
        namedChunks: true,
        nodeEnv: 'production',
        flagIncludedChunks: true,
        occurrenceOrder: false,
        // sideEffects: false,
        usedExports: true,
        concatenateModules: false,
        minimize: true,
        runtimeChunk: true,
        removeAvailableModules: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
        splitChunks: {
          chunks: 'async',
          minSize: 20000,
          minRemainingSize: 0,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          enforceSizeThreshold: 50000,
          cacheGroups: {
            default: false,
            commons: {
              name: 'commons',
              chunks: 'all',
              priority: 2,
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
            },
            vendors: {
              test: /node_modules/,
              chunks: 'all',
              name: 'vendors',
              priority: 10,
              enforce: true,
            },
          },
        },
      },
    }, { env, paths }) => { return webpackConfig; },
    plugins: [
      //Webpack build progress bar
      new WebpackBar({
        profile: true,
      }),
      //View the progress of packaging
      new SimpleProgressWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [{ from: 'src/assets', to: 'public' }],
        options: {
          concurrency: 100,
        },
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[hash:6].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash:6].css',
      }),
      ...whenDev(() => [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()], []),
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
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20,
          }),
          // new webpack.optimize.ModuleConcatenationPlugin(),
          new TerserPlugin({
            test: /\.js(\?.*)?$/i,
            parallel: true,
            extractComments: 'all',
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
            filename: "[path][base].gz",
            algorithm: 'gzip',
            test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
            threshold: 1024,
            minRatio: 0.8,
          }),
        ],
        []
      ),
    ],
  },

  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1890ff' },
            javascriptEnabled: true,
            paths: [path.resolve(__dirname, 'node_modules')],
            plugins: [new CleanCSSPlugin({ advanced: true })],
          },
        },
        babelPluginImportOptions: {
          libraryDirectory: 'es',
        },
      },
    },
  ],

  devServer: {
    server: {
      type: 'http',
    },
    historyApiFallback: true,
    compress: true,
    allowedHosts: 'auto',
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