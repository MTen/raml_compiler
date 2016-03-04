#!/usr/local/bin/node
var config = require("../config.js");
// Program is executable by running node app.js rel-Directory"
var args = process.argv[2];
var testGenerator = require("../src/testGenerator.js");
var template = fs.readFileSync(appRoot+"/lib/testTemplates/schemaDefault.js");

//  args = "/Users/mtener/Dropbox/fuzz/code/api-projects/tapwiser-parser/js/lib/tapwiser-api-specification/US_3.6";
args =  args || outputSchemaDirectory;

console.log(args);
try{
  var files = testGenerator.fileList(args);

  testGenerator.executeGenerator(files, template);
}catch(err){
  console.log("top level error: " +  err);
}

//node app.js