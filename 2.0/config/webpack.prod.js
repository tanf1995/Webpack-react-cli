const webpackConfigCreator = require('./webpack.common');
const merge = require('webpack-merge');
const optimizeCss = require('optimize-css-assets-webpack-plugin');

const config = {
    plugins: [
        new optimizeCss({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
    ],
    optimization: {
        minimizer: [new optimizeCss({})]
    }
}

const options = {
    mode: "production"
}

module.exports = merge(webpackConfigCreator(options), config);