const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
  mode: 'development',
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
              marketing: 'marketing@http://localhost:8081/remoteEntry.js' // marketing has to match the name of the marketing webpack config file
          },
          shared: packageJson.dependencies
      }),
      new HtmlWebpackPlugin({
          template: './public/index.html',
      })
  ]  
};

module.exports = merge(commonConfig, devConfig);
