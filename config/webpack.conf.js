module.exports = (function () {
    var webpackPlugin = require("webpack");
    var path = require("path");

    return {
        cache: true,
        stats: {
            colors: true,
            reasons: false,
            modules: false
        },
        watch: true,
        progress: false,
        failOnError: true,
        entry: "./src/icons.js",
        output: {
            path: path.join(__dirname, "../dist/"),
            filename: "showcar-icons.min.js",
            sourceMapFilename: "showcar-icons.min.js.map"
        },
        devtool: "source-map",
        module: {
            loaders: [
                {
                    test: /.*\.svg$/,
                    loaders: [
                        "raw-loader",
                        "svgo-loader?" + JSON.stringify({
                            plugins: [ { removeTitle: true }, { removeDimensions: true } ]
                        })
                    ]
                }
            ]
        },
        plugins: [ new webpackPlugin.optimize.DedupePlugin(), new webpackPlugin.optimize.UglifyJsPlugin() ]
    };
})();