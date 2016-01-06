#!/usr/local/bin/node


//config
var config = require("./config");
var
  ramlCompiler = require("./src/ramlCompiler"),
  rc = !new ramlCompiler(),
  args = process.argv;


console.log(__dirname);


// Program is executable by running node app.js nameOfSchema.json anotherSchema.json"

// @controller.setFile
//    Builds the target file string
//    **Hardcoded - region is the directory with the regions raml
//    fileArgs - file names arguments from commandline

//model.parse
//  takes a controller object that has the target file destination
//  this.execute = function () {
//    //console.log("testing");
//    //console.log(fs.readdirSync(fileArgs[2]));
//    for (file = 2, len = fileArgs.length; file < len; file++) {
//      try {
//
//        //controller.setFile(region, fileArgs[file]);
//        //model.parse(controller);
//
//      } catch (e) {
//        console.log(e.message);
//      }
//    }
//  };

//return this.execute();