const path = require('path');

// loaders
const {
    development: WebpackLoadersDev
} = require('./webpack.loaders');

// plugins
const {
    development: WebpackPluginsDev
} = require('./webpack.plugins');

module.exports = {
    mode: 'development',
    devServer: {
        port: 3001,
        hot: true,
        historyApiFallback: true,
        noInfo: false,
    },
    devtool: 'source-map',
    entry: path.resolve(__dirname, '..', 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, '..', 'build'),
        filename: '[name].[hash].js',
    },
    resolve: {
        modules: [
          'node_modules',
        ],
        extensions: ['.js', '.jsx', '.css', '.json'],
    },
    module: {
        rules: WebpackLoadersDev
    },
    plugins: WebpackPluginsDev
};
