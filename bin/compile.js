#!/usr/local/bin/node
var config = require("../config.js");
// Program is executable by running node app.js rel-Directory"
var args = process.argv[2];
var ramlCompiler = require("../src/ramlCompiler.js");

//  args = "/Users/mtener/Dropbox/fuzz/code/api-projects/tapwiser-parser/js/lib/testing/";
  var clearArgs = ramlCompiler.sanitizeInput(args);
  try {
    var files = ramlCompiler.fileList(clearArgs);
    ramlCompiler.executeCompiler(files);
  }catch(err){
    err
  }

//node app.js