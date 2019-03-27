const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressPlugin = new webpack.ProgressPlugin();

const { apiUrl, nodeEnv, srcPath } = require('./webpack.constants');

const HtmlWebpackPluginDev = new HtmlWebpackPlugin({
    template: `${srcPath}/index.html`,
    filename: 'index.html',
    minify: false,
    showErrors: true,
});

const ExtractTextPluginGlobal = new ExtractTextPlugin({
    filename: 'styles/[name].[contenthash].css',
    disable: nodeEnv !== 'production',
})

const DefinePluginDev = new webpack.DefinePlugin({
    apiUrl,
})

module.exports = {
    development: [
        HtmlWebpackPluginDev,
        ExtractTextPluginGlobal,
        DefinePluginDev,
        ProgressPlugin,
        new webpack.HotModuleReplacementPlugin()
    ],
    production: [
        ExtractTextPluginGlobal,
    ]
}