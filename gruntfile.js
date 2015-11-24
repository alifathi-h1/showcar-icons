module.exports = function(grunt) {
    var moduleName = "icons";
    var loadConfig = function (name, module) {
        var result = {};
        module = module || moduleName || "module";
        name = name.indexOf(".") > -1 ? name : name + ".conf";
        result[module] = require("./config/" + name + ".js");
        return result;
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        replace: loadConfig("replace"),
        webpack: loadConfig("webpack")
    });

    grunt.registerTask('default', ['replace', 'webpack']);

    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', "!grunt-cli"]
    });
};
