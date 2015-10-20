var path = require('path');

module.exports = function(grunt) {
    var webpackPlugin = require('webpack');
    grunt.initConfig({
        webpack: {
            showcarIcons: {
                cache: true,
                stats: {
                    colors: true,
                    reasons: false,
                    modules: false
                },
                watch: true,
                progress: false,
                failOnError: true,
                entry: './src/icons.js',
                output: {
                    path: path.join(__dirname, "dist/"),
                    filename: "showcar-icons.min.js",
                    sourceMapFilename: "showcar-icons.min.js.map"
                },
                devtool: 'source-map',
                module: {
                    loaders: [
                        {
                            test: /.*\.svg$/,
                            loaders: [
                                'raw-loader',
                                'svgo-loader?' + JSON.stringify({
                                    plugins: [
                                        { removeTitle: true },
                                        // { convertColors: { shorthex: false } },
                                        // { convertPathData: false },
                                        { removeDimensions: true }
                                    ]
                                })
                            ]
                        }
                    ]
                },
                plugins: [
                    new webpackPlugin.optimize.DedupePlugin(),
                    new webpackPlugin.optimize.UglifyJsPlugin()
                ]
            }
        },
        replace: {
            showcarIcons: {
                options: {
                    patterns: [
                        {
                            match: /\'@@iconNames'/,
                            replacement: function() {
                                var files = grunt.file.expand('icons/**/*.svg');
                                var resultFiles = [];
                                files.forEach(function (file) {
                                    file = file.replace('icons/', '');
                                    resultFiles.push(file.substring(0, file.lastIndexOf('.svg')));
                                });
                                return "'" + resultFiles.join("',\n    '") + "'";
                            }
                        }
                    ]
                },
                files: [
                    {
                        src: ['src/icons.tpl.js'],
                        dest: 'src/icons.js'
                    }
                ]
            }
        }
    });

    grunt.registerTask('default', ['replace:showcarIcons', 'webpack:showcarIcons']);

    require('matchdep').filterDev(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks);
};