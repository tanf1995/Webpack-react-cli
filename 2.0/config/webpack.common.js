const path = require('path');

function webpackCommonConfigCreator(options){
    /**
     * options: 
     *      mode // 开发模式
     */

    return {
        mode: options.mode,
        entry: "./src/index.js",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "../build"),
        }
    }
}

module.exports = webpackCommonConfigCreator;