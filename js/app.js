#!/usr/local/bin/node

// Program is executable by running node app.js rel-Directory"
var args = process.argv[2];
var ramlCompiler = require("./src/ramlCompiler.js");
var output = process.cwd()+"/output/";

  args = "/Users/mtener/Dropbox/fuzz/code/api-projects/tapwiser-parser/js/lib/tapwiser-api-specification/US_3.6";
//  args = "/Users/mtener/Dropbox/fuzz/code/api-projects/tapwiser-parser/js/lib/testing/";

  console.log(args);

  var files = ramlCompiler.fileList(args);
  ramlCompiler.execute(files);

//node app.js