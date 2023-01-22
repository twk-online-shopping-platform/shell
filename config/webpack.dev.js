const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const WebpackRemoteTypesPlugin = require("webpack-remote-types-plugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
    static: {},
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        featured: "featured@http://localhost:8081/remoteEntry.js",
      },
    }),
    new WebpackRemoteTypesPlugin.default({
      remotes: {
        featured: "featured@http://localhost:8081/remoteEntry.js",
      },
      outputDir: "node_modules", // supports [name] as the remote name
      remoteFileName: "[name]-dts.tgz", // default filename is [name]-dts.tgz where [name] is the remote name, for example, `app` with the above setup
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
