const webpack = require('webpack');
const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const helpers = require('./helpers');
const { CleanCssWebpackPlugin } = require('@angular-devkit/build-angular/src/angular-cli-files/plugins/cleancss-webpack-plugin');
const { HashedModuleIdsPlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        'user': './src/user.ts',
        'admin': './src/admin.ts',
        'print': './src/print.ts',
        'signup': './src/signup.ts'
    },

    output: {
        path: helpers.root('dist'),
        // This public path is required to make sure that the injected assets are absolute, so work with sub-apps (admin, styleguide)
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    node: {
        fs: 'empty'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: { /* Loader options go here */ }
            },
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'ng-annotate-loader',
                        options: {
                            add: true
                        }
                    },
                    {
                        loader: 'ts-loader',
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader',
                options: {
                  name: `assets/[name].[ext]`,
                  limit: 10000
                }
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src'),
                use: [MiniCssExtractPlugin.loader, 'css-loader?sourceMap'],
            },
            {
                test: /\.(md|css)$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            },

            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },

        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    minChunks: 2,
                    name: 'vendor',
                    filename: '[name].js'
                }
            }
        }
    },

    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),

        new MiniCssExtractPlugin({ filename: '[name].css' }),

    ]
};
