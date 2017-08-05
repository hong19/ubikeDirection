const path = require('path');

module.exports = {
    // app entry point
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // dev server output path
        publicPath: "/dist/",
    },

    devServer: {
        // enable inline mode
        inline: true
    },
};