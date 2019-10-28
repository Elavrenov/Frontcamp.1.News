const path = require("path");
//const NpmInstallPlugin = require("npm-install-webpack-plugin");
// require("babel-core/register");
// require("babel-polyfill");

module.exports = {
    entry: {
        main: "./src/js/index.js",
        news: "./src/js/news.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
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