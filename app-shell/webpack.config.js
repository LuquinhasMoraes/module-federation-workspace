const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "appShell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({

        // For remotes (please adjust)
        // name: "appShell",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './styles': './src/styles.scss',
        // },

        // For hosts (please adjust)
        remotes: {
          'app2': "app2@http://localhost:4202/remoteEntry.js"
        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: false, requiredVersion: '12.2.0 - 15.0.0' },
          "@angular/common": { singleton: true, strictVersion: false, requiredVersion: '12.2.0 - 15.0.10' },
          "@angular/common/http": { singleton: true, strictVersion: false, requiredVersion: '12.2.0 - 15.0.0' },
          "@angular/router": { singleton: true, strictVersion: false, requiredVersion: '12.2.0 - 15.0.0' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin(),
  ],
};
