const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const NpmInstallPlugin = require("npm-install-webpack-plugin");
// require("babel-core/register");
// require("babel-polyfill");

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
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
                            //'@babel/preset-env'
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