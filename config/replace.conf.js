module.exports = (function() {
    var grunt = require("grunt");

    return {
        options: {
            patterns: [
                {
                    match: /\'@@iconNames'/,
                    replacement: function() {
                        var files = grunt.file.expand("icons/**/*.svg");
                        var resultFiles = [];
                        files.forEach(function (file) {
                            file = file.replace("icons/", "");
                            resultFiles.push(file.substring(0, file.lastIndexOf(".svg")));
                        });
                        return "'" + resultFiles.join("',\n    '") + "'";
                    }
                }
            ]
        },
        files: [
            {
                src: ["src/icons.tpl.js"],
                dest: "src/icons.js"
            }
        ]
    };
})();