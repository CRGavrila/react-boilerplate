const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressPlugin = new webpack.ProgressPlugin();

const { nodeEnv } = require('./webpack.constants');

const HtmlWebpackPluginDev = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '..', 'src/index.html'),
    filename: 'index.html',
    minify: false,
    showErrors: true,
});

const ExtractTextPluginGlobal = new ExtractTextPlugin({
    filename: 'styles/[name].[contenthash].css',
    disable: nodeEnv !== 'production',
})

// const DefinePluginDev = new webpack.DefinePlugin({
//     HtmlWebpackPluginDev
// })

module.exports = {
    development: [
        HtmlWebpackPluginDev,
        ExtractTextPluginGlobal,
        ProgressPlugin,
        new webpack.HotModuleReplacementPlugin()
    ],
    production: [
        ExtractTextPluginGlobal,
    ]
}