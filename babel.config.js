module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'entry',
                corejs: 3, // specify the version of core-js
                // Define browserslist target here, or in package.json, or .browserslistrc
                targets: "> 0.25%, not dead"
            },
        ],
        '@babel/preset-react'
    ],
};
