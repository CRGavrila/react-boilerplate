const path = require('path');

const {
    NODE_ENV: nodeENV,
    secured,
} = process.env;

module.exports = {
    appPath: path.resolve(__dirname, '../src/app'),
    assetsPath: path.resolve(__dirname, '../src/assets'),
    buildPath: path.resolve(__dirname, '../build'),
    apiUrl: secured ? 'https://localhost:5000' : 'http://localhost:5000',
    nodeENV,
    srcPath: path.resolve(__dirname, '../src'),
}