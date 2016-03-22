// library imports - private
var config = require('../config');
var helpers = require('./helpers');
var validator = require('is-my-json-valid');
var jsonlint = require("jsonlint");
var tv4 = require('tv4');

module.exports = {
  ///////////////////
  // import helpers//
  ///////////////////
  sanitizeInput: helpers.sanitizeInput,
  checkFileType: helpers.checkFileType,
  fileList: helpers.fileList,
  //this.targetDirectory = dir
  //this.schemaDirectory = dir + "/schema/"
  //this.examplesDirectory = dir + "/examples/"
  //this.fileArray = fs.readdirSync(this.schemaDirectory)


  stuff: function(){
    console.log("sanity check");
  },

  execute: function(obj) {
    _this = this;
    for (var key in obj) {
      if(obj[key] != null){
        _this.tv4Valid(key, obj[key])
      }
    }
  },
  stateSetup: function(file, example){
    var schema = this.schemaDirectory + file;
    var example = this.examplesDirectory + example;
    var json = JSON.parse(fs.readFileSync(schema, 'utf8'));
    var exampleJson = JSON.parse(fs.readFileSync(example, 'utf8'));
    return [json, exampleJson]
  },

  jsonlintValid: function(schema, example){
    try{
      var state = this.stateSetup(schema, example);
      var schemaJson = state[0], exampleJson = state[1];

      //validates the file is formatted properly
      var validate = validator(schemaJson);

      //compares schema to example
      validate(exampleJson, {verbose: true});

      if(validate.errors == null){
        console.log(file, "passes" )
      }

      if(validate.errors != null){
        console.log(file, "\n",validate.errors)
      }
    }
    catch(e){
      if(e.message.indexOf("ENOENT: no such file or directory,") > 1){
        console.log(e.message)
      }
    }
  },
  tv4Valid: function( schema, example) {
    var state = this.stateSetup(schema, example);
    var schemaJson = state[0], exampleJson = state[1];
    var v = tv4.validateMultiple(exampleJson, schemaJson);
    console.log(schema, v, "\n")
    //fs.appendFileSync(`${appRoot}/output/validation-results.json`, JSON.stringify(v), 'utf-8')
  }

};
