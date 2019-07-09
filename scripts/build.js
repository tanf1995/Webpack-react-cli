const webpack = require('webpack');
const webpackConfig = require('../config/webpack.prod.js');

webpack(webpackConfig, (err, stats) => {
    if(err || stats.hasErrors()){
        console.log("编译失败");
        console.log(stats);
    }
});