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

  // iterates over each item in the directory compiles the schema.
  //public
  execute: function(dir) {
    try {
      for (var file = 0, dirLength = dir.length, last = dirLength; file < last; file++) {
        var f = dir[file];
        var result = this.checkFileType(f);

        switch( result ){
          case "example":
            this.lintExamples(f);
            break;
          case "json":
            this.compileSchema(f);
            break;
          case "raml":
            this.moveRamlFile(f);
            break;
          case "other":
            console.log("This file is not parseable " + f);
            break;
        }
      }
    }
    catch(e) {
      console.log(e.message);
      return e.message;
    }

  },
  //public
  // gets files from directory
  fileList: function (dir) {
    this.targetDir = dir;
    this.fileArray = fs.readdirSync(dir);
    return this.fileArray;
  },


  //private
  checkFileType: function(file) {
    if (file.match(/(^\w*(.json)$)/)) {
      return "json"
    }
    else if(file.match(/(raml)/)){
      return "raml"
    }
    else if(file.match(/^(x-)\w*(.json)$/)){
      return "example"
    }
    else{
      return "other"
    }
  },

  //private
  lintExamples: function(file){
    var fileLocation = this.targetDir + "/" + file;
    var json = fs.readFileSync(fileLocation);
    try{
      JSON.parse(json);
      fs.writeFileSync(output + file, json);
    } catch(e) {
      console.log(e.message +" in "+ file);
      return e.message;
    }

  },

  // private
  // compilesSchema
  compileSchema: function(file) {
    try {
      _this = this;
      var fileLocation = this.targetDir + "/" + file;

      refParser.bundle(fileLocation, function (err, schema) {
            if (err) {
              throw new Error(err + " :: target file error");
            } else {
              _this.removeSchemaDeclaration(schema);
              _this.addSchemaDraft4Declaration(schema);
              var bundledSchema = JSON.stringify(schema, null, 2);
              JSON.parse(bundledSchema);
              fs.writeFileSync(output + file, bundledSchema);
            }
          });
    } catch (err) {
      // prevents bubbling
      return err + console.error(err + " :: bubble wrapper :: compileSchema");
    }
  },

  removeSchemaDeclaration: function(obj) {
    if(obj) {
      for (var key in obj) {
        var item = obj[key];
        if (key == '$schema') {
            delete obj[key];
        } else if (typeof item == "object") {
          this.removeSchemaDeclaration(item)
        }
      }
    }
    return obj
  },

  addSchemaDraft4Declaration: function(obj) {
    obj.$schema = "http://json-schema.org/draft-04/schema#";
    return obj
  },

  moveRamlFile: function(file){
    var fileLocation = this.targetDir + "/" + file;
    var raml = fs.readFileSync(fileLocation);
    fs.writeFileSync(output + file, raml);
  }

};

