module.exports = function () {

  var
    _controller = this,
    fs = require('fs');

    this.output = "output/";
    this.region = "";
    this.schema = "";
    this.targetFiles = [];

  this.files = function(directory) {
    this.targetFiles = fs.readdirSync(directory);
    return this.targetFiles;
  };

  // temporary method to get specific methods
  this.setFile = function(r, s){
    _controller.region = r; // directory like CO_2.0
    _controller.schema = s; // specific schema like brand.json
    this.targetFile = r + s;
  }
};
