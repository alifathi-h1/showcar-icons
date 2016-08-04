module.exports = (function() {
    var grunt = require("grunt");

    return {
        options: {
            patterns: [
                {
                    match: /\'@@iconNames'/,
                    replacement: function() {
                        var filesNames = grunt.file.expand("icons/**/*.svg").map(function(name) {
                          return name.substr('icons/'.length).slice(0, -4);
                        });
                        return "'" + filesNames.join("',\n    '") + "'";
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
