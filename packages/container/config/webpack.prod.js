const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;   // defined global we get from aws

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js', //  cache bust the new prod output file
        publicPath: '/container/latest/'  // used anytime some part of webpack tries to refer to a file built by webpack
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);
