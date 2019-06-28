import commonConfigCreator from './webpack.common';
const merge = require('webpack-merge');
const path = require('path');
// plugin
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const optimizeCss = require('optimize-css-assets-webpack-plugin');


const prodConfig = {
    plugins: [
        new ExtractTextPlugin({
            filename: "../css/[name][hash].css"
        }),
        new optimizeCss({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
    ],
    optimization: {
        // minimize: true,
        minimizer: [new optimizeCss({})]
    }
}

const commonConfigOptions = {
    mode: "production",
    outputPath: "../build/js",
    indexHtmlName: "../index.html",
    picLoader: {
        publicPath: "/images",
        outputPath: "../images"
    }
}


module.exports = merge(commonConfigCreator(commonConfigOptions), prodConfig);