var recursiveDir = require('recursive-readdir');
var path = require('path');
var fs = require('fs');
var R = require('ramda');
var Q = require('q');
var SVGO = require('svgo');
var mkdirp = require('mkdirp');

var sourceDir = process.argv[2];
var resultFile = process.argv[3];

var svgo = new SVGO();
var then = R.curry(function(f, p) { return p.then(f); });
var thenMap = R.curry(function(f, p) { return p.then(R.map(f)); });
var spread = R.curry(function(f, p) { return p.spread(f); });

var recursiveReadDir = R.curryN(2, Q.nfcall)(recursiveDir);

/// optimise :: SVGText -> SVGText
var optimise = function(svg) {
  return Q.Promise(function(res, rej) {
     svgo.optimize(svg, function(result) {
       if (result.data) {
         res(result.data);
       } else {
         rej('SVG optimisation has been failed');
       }
     });
  });
}


var readFile = R.flip(R.curryN(2, Q.nfcall)(fs.readFile))({encoding: 'utf-8'});
var writeFile = R.curry(function(fileName, content) {
  mkdirp(path.dirname(fileName));
  return Q.nfcall(fs.writeFile(fileName, content, 'utf8'));
});

var joinWithDirname = R.curryN(2, path.join)(__dirname);

var relativeFileName = R.curry(function(sourcePath, fileName) {
  return fileName.substr(sourcePath.length).slice(0,-4);
});

var template = fs.readFileSync('./src/icons.tpl.js', { encoding: 'utf-8' });

var fillTemplate = R.curry(function(template, name, svg) {
  return template.replace(/@@iconName/g, name).replace(/@@iconText/g, svg);
});

/// applyTemplate :: [FileNames] -> [SVGStrings] -> String
var applyTemplate = R.zipWith(fillTemplate(template));

/// buildFilesList :: Path -> Promise([Paths])
var buildFilesList = R.compose(recursiveReadDir, joinWithDirname);

/// buildSVGList -> Promise([Paths]) -> Promise([SVGStrings])
var buildSVGList = R.compose(then(Q.all), thenMap(optimise), then(Q.all), thenMap(readFile));

/// buildFileNamesList :: Promise([Paths]) -> Promise([FileNames])
var buildFileNamesList = thenMap(R.compose(R.replace(/[^a-zA-Z0-9]/g, ''), relativeFileName(joinWithDirname(sourceDir))));

/// filesListToNamesAndSVGs :: Promise([Paths]) -> Promise([ [FileNames] [SVGStrings] ])
var filesListToNamesAndSVGs = R.compose(Q.all, R.ap([buildFileNamesList, buildSVGList]), R.of);

var program = R.compose(
  then(writeFile(resultFile)),
  then(R.concat('import { regIcon } from "../src/reg.js";\n\n')),
  then(R.join('\n')),
  spread(applyTemplate),
  filesListToNamesAndSVGs,
  buildFilesList
);

program(sourceDir);
