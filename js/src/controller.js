module.exports = function () {

  var fs, filesArray, rootDir;

  fs = require('fs');
  rootDir = "../";
  var stuff = this;
  this.filesArray;
  this.output = "output/";
  this.region;
  this.schema;


  this.files = function(folderR) {
    console.log("unique success")
    fs.readdir(folderR, function (err, data) {
      if (err) throw err;
      //TODO this is returning undefined
      this.filesArray = data;
    })
  };

  // temporary method to get specific methods
  this.setFile = function(r, s){
    stuff.region = r; // directory like CO_2.0
    stuff.schema = s; // specific schema like brand.json
    console.log(stuff.region + stuff.schema);
    this.targetFile = r + s;
  }
};