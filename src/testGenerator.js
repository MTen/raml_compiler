// library imports
var
  fs = require('fs'),
  refParser = require('json-schema-ref-parser'),
  _ = require('underscore');

// private fields
var output = process.cwd()+"/output/";
var temp  = process.cwd()+"/temp/";
var targetDir = "";


module.exports = {
  fileList: function (dir) {
    this.targetDir = dir;
    this.fileArray = fs.readdirSync(dir);
    return this.fileArray;
  }
};