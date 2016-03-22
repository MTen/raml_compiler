// library imports - private
var config = require('../config');
var refParser = require('json-schema-ref-parser');
var helpers = require('./helpers');

  // private fields
  var output = "";

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

  // iterates over each item in the directory compiles the schema.
  //public
  executeCompiler: function(dir, outputDir) {
    try {
      output = outputDir;
      for (var file = 0, dirLength = dir.length, last = dirLength; file < last; file++) {
        var f = dir[file];
        var result = this.checkFileType(f);
        this.evaluateResult(result, f)
      }
      return console.log("schema compiled");
    }
    catch(e) {
      console.log(e.message);
      return e.message;
    }

  },
  evaluateResult: function(result, f){
    switch( result ){
    case "example":
      this.lintExamples(f);
      break;
    case "json":
      this.promiseCompile(f);
      break;
    case "raml":
      this.moveRamlFile(f);
      break;
    case "other":
      console.log(f + " is not parseable");
    }
  },


  //private
  lintExamples: function(file){
    var fileLocation = this.examplesDirectory + "/x-" + file;
    var json = fs.readFileSync(fileLocation);
    try{
      JSON.parse(json);
    } catch(e) {
      console.log("Error in " +file+ " " +e.message+ " run the example through http://www.jslint.com/");
    }
    fs.writeFileSync(output +"/examples/"+ file, json);
  },

  // DEPRECIATED
  // compiles schema with a silent callback.
  // private
  // compilesSchema
  compileSchema: function(file) {
    try {
      _this = this;
      var fileLocation = this.schemaDirectory + file;

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

  // private
  // compiles schema with the promise syntax
  promiseCompile: function(file){
    try{
      var fileLocation = this.schemaDirectory + file;
      _this = this;
      var f = file;
      refParser.dereference(fileLocation)

        .then(function(schema){
          return _this.removeSchemaDeclaration(schema);

        }, function(err){
          fs.appendFileSync( outputDirectory+'cyclical-files.txt', "\n" + file + "\n" + err + "\n" + fileLocation + "\n" + f + "\n"  );

          if(err == "RangeError: Maximum call stack size exceeded") {

            _this.bundleItBaby(fileLocation, f)

          } else if(err == "Error: Error opening file") {
            fs.appendFileSync( outputDirectory+'cyclical-files.txt', "\n" + file + "\n" + " WORDS"  );

          } else {
            console.log(file, "Error removing schema declaration\n", err);
          }
        })

        // workaround for cyclical references
        .then(function(schema){
          return _this.addSchemaDraft4Declaration(schema);
        }, function(err){

          if(err == "RangeError: Maximum call stack size exceeded") {
            fs.appendFileSync( outputDirectory+'cyclical-files.txt', "\n" + file);
            _this.bundleItBaby(fileLocation, f)
          } else {
            console.log(file, "error adding schema declaration\n", err);
          }
        })

        .then(function(schema){
          var deferencedSchema = JSON.stringify(schema, null, 2);
          fs.writeFileSync(outputSchemaDirectory + f, deferencedSchema);
        }, function(err){
          console.log("compile error", err);
        })
    }catch(err){
      console.error( err + " :: bubble wrapper :: compileSchema");
      return err.message
    }
  },
  bundleItBaby: function(filepath, f){
    refParser.bundle(filepath)

    .then(function(schema){
        return _this.removeSchemaDeclaration(schema)
      }, function(err){
        console.log(err)
      })

      .then(function(schema){
        return _this.addSchemaDraft4Declaration(schema);
      },
      function(err){
        console.log(err)
      })
      .then(function(schema){
        var bundledSchema = JSON.stringify(schema, null, 2);
        console.log(f);
        fs.writeFileSync(outputSchemaDirectory + f, bundledSchema);

      }, function(err){
        console.log("compile error" + err);
      })
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
    var fileLocation = this.targetDirectory + file;
    var raml = fs.readFileSync(fileLocation);
    fs.writeFileSync(output + file, raml);
  }

};

