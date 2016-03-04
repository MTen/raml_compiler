#!/usr/local/bin/node
var config = require("../config.js");
// Program is executable by running node app.js rel-Directory"
var args = process.argv[2];
var ramlCompiler = require("../src/ramlCompiler.js");

//  args = "/Users/mtener/Dropbox/fuzz/code/api-projects/tapwiser-parser/js/lib/testing/";
  console.log(appRoot);
  console.log(args);

  var files = ramlCompiler.fileList(args);
  ramlCompiler.executeCompiler(files);

//node app.js