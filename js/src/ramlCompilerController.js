module.exports = function () {

  var
    _controller = this,
    fs = require('fs');
  this.region = "lib/CO_2.0/";
  this.output = "./output/";
  this.schema = "";
  this.targetFile = "";
  this.targetFiles = [];


  // temporary method to get specific methods
  this.setFile = function (r, s) {
    _controller.region = r; // directory like CO_2.0
    _controller.schema = s; // specific schema like brand.json
    this.targetFile = r + s;
  };



};
