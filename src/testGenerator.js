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

  executeGenerator: function(dir) {
    try {
      for (var file = 0, dirLength = dir.length, last = dirLength; file < last; file++) {
        var f = dir[file];
        var result = this.checkFileType(f);

        switch( result ){
          case "example":
            break;
          case "json":
            this.createTests(f);
            break;
          case "other":
            break;
        }
      }
      return "schema compiled";
    }
    catch(e) {
      console.log(e.message);
      return e.message;
    }

  },

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

  fileList: function (dir) {
    try {
      this.targetDir = dir;
      this.fileArray = fs.readdirSync(dir);
      return this.fileArray;
    } catch (e) {
      console.log(e.message);
      throw new Error(e + " :: directory Error");
    }
  },

  createTests: function(file, template) {
    var bundledSchema = JSON.stringify(schema, null, 2);
    var temp = fs.readFileSync(template);
    temp.replace("@cursor", file);
    fs.writeFileSync(output + file, bundledSchema);
  }

};
