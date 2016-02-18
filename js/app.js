#!/usr/local/bin/node

// Program is executable by running node app.js rel-Directory"
var
  args = process.argv[2],
  ramlCompiler = require("./src/ramlCompiler.js");

  console.log(args);

  var files = ramlCompiler.fileList(args);
  ramlCompiler.execute(files);
