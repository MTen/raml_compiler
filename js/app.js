#!/usr/local/bin/node

// Program is executable by running node app.js rel-Directory"
var
  args = process.argv[2],
  ramlCompiler = require("./src/ramlCompiler.js"),
  ramlParser = require("");

  console.log(args);

  var files = ramlCompiler.fileList(args);
  ramlCompiler.execute(files);

//node app.js /Users/mtener/Dropbox/fuzz/code/api-projects/tapwiser-api-specification
