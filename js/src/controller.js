module.exports = function () {

  var path, fs, files, appDir, region, schema, targetFile, filesArray ;

  path = require('path');
  fs = require('fs');
  filesArray = [];
  this.appDir = appDir = path.dirname(require.main.filename);
  this.output = appDir + "/output/";
  this.region = region = "/Master/";
  this.schema = schema = "brand.json";
  this.folderRegion = appDir + region;
  this.targetFile = region + schema;

  this.files = function(folderR) {
    console.log("unique success")
    fs.readdir(folderR, function (err, data) {
      if (err) throw err;
      //TODO this is returning undefined
      this.filesArray = data;
    })
  }
};