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
  execute: function(dir, output) {
    try {
      for (var file = 0, dirLength = dir.length, last = dirLength; file < last; file++) {
        this.checkFileType(dir[file]);

        this.compileSchema(dir[file]);
        this.cleanSchema(dir[file]);
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

  checkFileType: function(file) {
    if (file.match(/(\.json)/)) {
      return "json"
    }
    else if(file.match(/(raml)/)){
      return "raml"
    }
    else{
      return "other"
    }
  },

  // private
  // compilesSchema
  compileSchema: function(file) {
    try {
      var fileLocation = this.targetDir + "/" + file;
      var bundledSchema = "";
      refParser.bundle(fileLocation, bundledSchema, function (err, schema) {
            if (err) {
              throw new Error(err + " :: target file error");
            } else {
              bundledSchema = JSON.stringify(schema, null, 2);
              fs.writeFileSync(output + file, bundledSchema)
            }
          });
        }else if(file.match(/(raml)/)) {

        }else{
          console.log("File does not compile: " + file)
      }
    } catch (err) {

      // prevents bubbling
      return err + console.error(err + " :: bubble wrapper :: compileSchema");
    }
  },

  copyRaml: function(file) {
    var raml = fs.readFileSync(fileLocation);
    fs.writeFileSync(output + file, raml);
  },

  cleanSchema: function(file) {
    try {
      var fileLocation = this.output + "/" + file;
      var bundledSchema = "";
      if (file.match(/(\.json)/)) {

          }
        });
      }else if(file.match(/(raml)/)) {
        var raml = fs.readFileSync(fileLocation);
        fs.writeFileSync(output + file, raml);
      }else{
        console.log("File does not compile: " + file)
      }
    } catch (err) {

      // prevents bubbling
      return err + console.error(err + " :: bubble wrapper :: compileSchema");
    }
  }


  // todo function: Remove schema declaration from body and then place it in the root.
  // remove target string

  // write to temp

  // open temp file

  // inject schema declaration in root

  // pass to deref parser


  //fs.writeFileSync(target, result);

};

