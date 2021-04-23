const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: "production",
    entry: {
        index: './src/ts/index.ts'
    },
    output: {
        /*// We want webpack to build a UMD wrapper for our module
        library: "tempTracker",
        libraryTarget: "umd",*/
        filename: "temp-tracker.js",
        path: path.join(__dirname, "/public"),
        publicPath: './'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
        alias: {
            components: path.resolve(__dirname, '..', './src/components'),
        }
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Email Input',
            meta:{
                viewport:'width=device-width,initial-scale=1.0'
            },
            filename: 'index.html',
            template:'./src/index.html'
        })],
    devServer: {
        contentBase: './public'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts(x)?$/,
                use: [
                    'awesome-typescript-loader'
                ],
                exclude: /node_modules/
            },

            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader', {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [require("autoprefixer")({grid: true}),
                                require('cssnano')({preset: 'default'})
                            ],
                            minimize: true
                        },
                    }, {
                        loader: 'sass-loader'
                    }],
                exclude: /node_modules/
            },
            {
                test: /\.(ttf|eot|otf|svg|png|jpg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader'
            }
        ],

    }
};