const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/'
    },
    devServer: {
      port: 8080,
      historyApiFallback: {
          index: 'index.html'
      },
  },
  plugins: [
      new ModuleFederationPlugin({
         name: 'container', // name for host not really used for anything 
          remotes: {
             // key value pairs. Keys are the names of the different modules we're going to try import into our container
              marketing: 'marketing@http://localhost:8081/remoteEntry.js', // marketing has to match the name of the marketing webpack config file
              auth: 'auth@http://localhost:8082/remoteEntry.js',
              dashboard: 'dashboard@http://localhost:8083/remoteEntry.js',
          },
          shared: packageJson.dependencies
      }),
  ]  
};

module.exports = merge(commonConfig, devConfig);
