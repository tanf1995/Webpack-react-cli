const commonConfigCreator = require('./webpack.common.ts');
const merge = require('webpack-merge');
//plugin


const prodConfig = {
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        port: 3000,
        hot: true,
    }
}

const commonConfigOptions = {
    mode: "development",
    outputPath: "../dist",
    indexHtmlName: "index.html",
    picLoader: {
        publicPath: "/",
        outputPath: "./"
    }
}


module.exports = merge(commonConfigCreator(commonConfigOptions), prodConfig);