const path = require("path");
const {when, whenDev, whenProd } = require("@craco/craco");
const CracoLessPlugin = require("craco-less");
const CracoAntDesignPlugin = require("craco-antd");

const CleanCSSPlugin = require("less-plugin-clean-css");


const env = process.env.NODE_ENV


module.exports = {
  reactScriptsVersion: "react-scripts",
  
  plugins: [
    {
      plugin:  CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
            paths: [path.resolve(__dirname, "node_modules")],
            plugins: [
                new CleanCSSPlugin({ advanced: true }),
            ],
          },
        },
        babelPluginImportOptions: {
          libraryDirectory: "lib",
        },
      },
    },
  ],
};



