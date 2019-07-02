const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const WebpackConfig = require('../config/webpack.dev.ts');


const compiler = Webpack(WebpackConfig);
const devServerOptions = Object.assign({}, WebpackConfig.devServer, {
    open: true,
    quiet: true,
    clientLogLevel: "none"
});
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(3000, "127.0.0.1", () => {
    console.clear()   
    console.log("start server on http://localhost:3000");
})