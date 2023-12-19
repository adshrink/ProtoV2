const path = require("path");
var copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
        library: "$",
        libraryTarget: "umd",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            watch: true
        },
        liveReload: true
    },
    plugins: [
        new copyWebpackPlugin({
            patterns: [
                { from: 'demo/' }
            ]
        })
    ],
    externals: {
        // index.js file: window.Object
        jquery: 'jQuery',
        Cookies: 'Cookies',
        botDetect: 'botDetect',
        WURFL: 'WURFL',
        Fingerprint2: 'Fingerprint2',
        gapi: 'gapi',
        toastr: 'toastr',
        grecaptcha: 'grecaptcha',
        __tcfapi: '__tcfapi',
        LazyLoad: 'LazyLoad',
        React: "React",
        $script: "$script"
    },
    module: {
        rules: [
            { //style-css-loader
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            { //babel
                test: /\.js$/i, exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/env', {
                                'targets': {
                                    'browsers': ['ie 6', 'safari 7'] //browser target support
                                }
                            }],
                            ['@babel/preset-react'],
                        ]
                    }
                }
            },
            
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'images/', // specify the output directory for images
                    },
                  },
                ],
            },
        ],
    },
    mode: "development",
}