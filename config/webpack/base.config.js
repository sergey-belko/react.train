'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')

const Autoprefixer = require('autoprefixer')
const PostCSSImport = require('postcss-import')
const PostCssUrl = require('postcss-url')
const PostCssEnv = require('postcss-preset-env')
const PostCssNested = require('postcss-nested')
const PostCssCustomProperties = require('postcss-custom-properties')
const PostCssFixFlexbugs = require('postcss-flexbugs-fixes')
const PostCssNormalize = require('postcss-normalize')

const alias = require('./alias')
const { APP_OUTPUT_DIR, ENTRY: entry } = require('../constants')

module.exports = {
    entry,
    output: {
        path: APP_OUTPUT_DIR,
        filename: 'index.js'
    },
    resolve: {
        alias,
        extensions: ['.js', '.jsx'],
        modules: ['src', 'node_modules']
    },
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            automaticNameDelimiter: '-',
            chunks: 'all',
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: (module) => module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1].replace('@', '')
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: ['react-hot-loader/webpack', 'babel-loader']
            },
            {
                test: /\.(s)?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            import: true,
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            },
                            sourceMap: true,
                            importLoaders: 1,
                            localsConvention: 'camelCaseOnly',
                            onlyLocals: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                new PostCssNormalize({ forceImport: true }),
                                new Autoprefixer(),
                                new PostCSSImport(),
                                new PostCssEnv(),
                                new PostCssUrl(),
                                new PostCssNested(),
                                new PostCssCustomProperties(),
                                new PostCssFixFlexbugs()
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
