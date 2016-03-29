#!/usr/local/bin/node
var config = require("../config.js");
// Program is executable by running node app.js rel-Directory"
var args = process.argv;
var ramlCompiler = require("../src/ramlCompiler.js");

folder = args[2] || appRoot+"/lib/tapwiser-api-specification/DR_1.0/";
output = args[3] || outputDirectory;

  var clearArgs = ramlCompiler.sanitizeInput(folder);

  try {
    fs.writeFileSync(outputDirectory+'cyclical-files.txt', "Files with cyclical dependencies" + "\n" + new Date().toLocaleString());
    var files = ramlCompiler.fileList(clearArgs);
    ramlCompiler.executeCompiler(files, output);
  }catch(err){
    console.log("top level error", err);
  }

//node app.js