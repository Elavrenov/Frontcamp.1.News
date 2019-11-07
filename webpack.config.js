const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugun = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

require("babel-core/register");
require("babel-polyfill");

module.exports = {
    mode: 'development',
    entry: ['babel-polyfill','./src/js/index.js'],
    output: {
        filename: "main.js",
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    optimization:{
        minimizer:[new UglifyJsPlugun()]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
    ],
    devServer:{
        contentBase: path.resolve(__dirname, "dist"),
        port: 9000
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "es2015", 
                            "stage-0"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {loader: 'url-loader'}
                ]
            }
        ]
    }

}