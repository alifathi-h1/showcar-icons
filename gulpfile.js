var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require("webpack");
var argv = require('yargs').argv;
var glob = require('glob');
var watch = argv.w;

var config = Object.create(require('./webpack.config.js')(watch));

gulp.task('prepare', function (callback) {
    glob('icons/*.svg', function (err, testFiles) {
        require('fs').readFile('src/icons.tpl.js', 'utf-8', function (err, data) {
            var files = [];

            testFiles.forEach(function (file) {
                files.push(file.substring(file.lastIndexOf('/') + 1, file.lastIndexOf('.svg')));
            });

            var newContent = data.replace("'{{iconNames}}'", "'" + files.join("',\n    '") + "'");
            require('fs').writeFile('src/icons.js', newContent, callback);

        })
    });
});
gulp.task('js', ['prepare'], function(callback) {
    webpack(config, function(err, stats) {
        gutil.log("[webpack]", stats.toString({ chunks: false, version: false, hash: false }));
    });
});

gulp.task('default', ['js']);