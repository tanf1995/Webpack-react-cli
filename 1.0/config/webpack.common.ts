const path = require('path');
// plugins
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


interface Options{
    mode: string,
    outputPath: string,
    indexHtmlName: string,
    picLoader: {
        publicPath: string,
        outputPath: string
    }
}
function commonConfigCreator(options: Options){
    let cssLoaders = [
        {
            loader: "css-loader",
            options: {
                modules: {
                    mode: 'local',
                    localIdentName: '[path][name]__[local]--[hash:base64:5]'
                },
                localsConvention: 'camelCase'
            }
        },
        "sass-loader",
        {
            loader: "postcss-loader",
            options: {
                ident: 'postcss',
                plugins: (loader: any) => [
                    require('postcss-import')({ root: loader.resourcePath }),
                    require('autoprefixer')()
                ]
            }
        }
    ]

    if(options.mode === 'production'){
        cssLoaders =  ExtractTextPlugin.extract({
            publicPath: "/css",
            fallback: "style-loader",
            use: cssLoaders
        })
    }else{
        cssLoaders.unshift("style-loader");
    }

    const outputFileName = options.mode === 'production'
        ? "[name].[contenthash].bundle.js" 
        : "[name].[hash].bundle.js";

    return {
        mode: options.mode,
        entry: "./src/index.js",
        output: {
            filename: outputFileName,
            path: path.resolve(__dirname, options.outputPath)
        },
        resolve: {
            extensions: [".js", ".json", ".jsx", ".css", 'scss', 'tsx', 'ts'],
            alias: {
                "@": path.resolve(__dirname, '../src')
            }
        },
        module: {
            rules: [
                {
                    test: /\.(jsx?|tsx?)$/,
                    include: [
                        path.resolve(__dirname, "../src")
                    ],
                    use: [
                        "ts-loader",
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ['@babel/preset-react'],
                                plugins: ["react-hot-loader/babel"]
                            }
                        }
                    ]
                },
                {
                    test: /\.(css|scss)$/,
                    include: [
                        path.resolve(__dirname, "../src")
                    ],
                    exclude: [
                        /node_modules/
                    ],
                    use: cssLoaders
                },
                {
                    test: /\.(jpg|png|svg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8000,
                                publicPath: options.picLoader.publicPath,
                                outputPath: options.picLoader.outputPath,
                                name: '[hash].[ext]',
                            }
                        },
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        'file-loader'
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), "build/")]
            }),
            new HtmlWebpackPlugin({
                // title: "webpack react",
                filename: options.indexHtmlName,
                template: path.resolve(__dirname, "../public/index.html")
            }),
        ]
    }
}


// module.exports = _commonConfigCreator;
export default commonConfigCreator;