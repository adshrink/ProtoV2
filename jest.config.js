// const { createWebpackConfig } = require('jest-webpack-externals');

module.exports = {
    // ...other Jest configuration options
    transform: {
        "^.+\\.js$": "babel-jest"
    },
    // Webpack configuration for Jest
    setupFiles: [
        './jest-setup.js', // Path to your setup file
    ],
};

/*
webpack: createWebpackConfig({
        // Your existing Webpack configuration
        // You can provide the path to your existing Webpack config file or define the configuration object inline
        webpackConfig: './webpack.config.js',
    }),
    */