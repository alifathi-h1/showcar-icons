module.exports = (function() {
    var path = require('path');
    var webpackPlugin = require('webpack');

    return {
        cache: true,
        devtool: 'source-map',
        entry: './src/icons.js',
        failOnError: true,
        module: {
            loaders: [
                {
                    test: /.*\.svg$/,
                    loaders: [
                        'raw-loader',
                        'svgo-loader?' + JSON.stringify({
                            plugins: [
                                {removeTitle: true},
                                {removeDimensions: true}
                            ]
                        })
                    ]
                }
            ]
        },
        output: {filename: "./dist/showcar-icons.min.js"},
        plugins: [
            new webpackPlugin.optimize.DedupePlugin(),
            new webpackPlugin.optimize.UglifyJsPlugin()
        ],
        progress: false,
        stats: {
            colors: true,
            reasons: false,
            modules: false
        },
        watch: true
    };
})();
