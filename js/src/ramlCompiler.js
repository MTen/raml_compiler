// library imports
var
  fs = require('fs'),
  refParser = require('json-schema-ref-parser'),
  _ = require('underscore');

  // private fields
  var output = process.cwd()+"/output/";
  var targetDir = "";


module.exports = {

  // iterates over each item in the directory
  //public
  execute: function(dir) {
    try {
      for (var file = 0, d = dir, last = dir.length; file < last; file++) {
        this.compileSchema(dir[file])
      }
      "schema compiled";
    }
    catch(e) {
      return e.message;
    }

  },
  //public
  // gets files from directory
  fileList: function (dir) {
    this.targetDir = dir;
    this.fileArray = fs.readdirSync(dir);
    //this.fileArray = _.without(this.fileArray, 'api.raml');
    return this.fileArray;
  },

  // private
  // compilesSchema
  compileSchema: function(file) {
    try {
      if(file.match(/(api.raml|^x-)/)){
      // instead of nesting a not statement
      }else {
        refParser.bundle(this.targetDir + "/" + file, function (err, schema) {

          if (err) {
            throw new Error(err + " :: target file error");
          } else {

            fs.writeFile(output + file, JSON.stringify(schema, null, 2), function (err) {

              //throws error if there is a problem writing a file
              if (err) {
                throw new Error(err + " :: file writing error");
              }
            })
          }
        })
      }
    } catch (err) {
      // prevents bubbling
      return console.error(err + " :: bubble wrapper");
    }
  }

};

