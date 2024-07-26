const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  // entry: './src/bootstrap.ts',
  output: {
    uniqueName: "app2",
    publicPath: "auto",
    scriptType: 'text/javascript'
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

      name: "angular1",
      library: { type: "var", name: "angular1" },
      filename: "remoteEntry.js",

      exposes: {
        './app': './src/bootstrap.ts',
        './teste-b': './src/bootstrap-teste-b.ts',
        './teste-a': './src/bootstrap-teste-a.ts',
        './component': './src/app/app.component.ts',
      },

        // For hosts (please adjust)
        // remotes: {
        //   shell: 'shell@http://localhost:4200/remoteEntry.js',
        // },

        shared: share({
         "@angular/core": { requiredVersion: '15.0.0' },
          "@angular/common": { requiredVersion: '15.0.0' },
          "@angular/common/http": { requiredVersion: '15.0.0' },
          "@angular/router": { requiredVersion: '15.0.0' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
