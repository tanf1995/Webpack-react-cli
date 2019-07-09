const webpackConfigCreator = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');

const config = {
    output: {
        filename: "js/[name][hash].js"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        hot: true
    }
}

const options = {
    mode: "development"
}

module.exports = merge(webpackConfigCreator(options), config);