import commonConfigCreator from './webpack.common';
const merge = require('webpack-merge');
//plugin


const prodConfig = {
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        // open: true,
        port: 3000,
        hot: true
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