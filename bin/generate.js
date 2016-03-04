#!/usr/local/bin/node
var config = require("../config.js");
// Program is executable by running node app.js rel-Directory"
var args = process.argv[2];
var testGenerator = require("./src/testGenerator.js");

//  args = "/Users/mtener/Dropbox/fuzz/code/api-projects/tapwiser-parser/js/lib/tapwiser-api-specification/US_3.6";
args = "/Users/mtener/Dropbox/fuzz/code/api-projects/tapwiser-parser/js/output/";

console.log(args);

var files = testGenerator.fileList(args);
testGenerator.executeGenerator(files);

//node app.js