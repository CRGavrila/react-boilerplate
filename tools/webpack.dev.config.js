const path = require('path');

// loaders
const {
    development: WebpackLoadersDev
} = require('./webpack.loaders');

// plugins
const {
    development: WebpackPluginsDev
} = require('./webpack.plugins');

// constants
const {
    appPath,
    assetsPath,
    buildPath,
    srcPath,
} = require('./webpack.constants');

module.exports = {
    mode: 'development',
    devServer: {
        port: 3001,
        hot: true,
        historyApiFallback: true,
        noInfo: false,
    },
    devtool: 'source-map',
    context: __dirname,
    entry: `${srcPath}/index.js`,
    output: {
        path: buildPath,
        filename: '[name].[hash].js',
    },
    resolve: {
        modules: [
          'node_modules',
        ],

        alias: {
            '~app': appPath,
            '~assets': assetsPath,
            '~components': `${appPath}/components`,
            '~constants': `${appPath}/constants`,
            '~layouts': `${appPath}/layouts`,
            '~modules': `${appPath}/modules`,
            '~pages': `${appPath}/pages`,
            '~utils': `${appPath}/utils`,
        },

        extensions: ['.js', '.jsx', '.css', '.json'],
    },
    module: {
        rules: WebpackLoadersDev
    },
    plugins: WebpackPluginsDev
};
