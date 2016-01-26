#!/usr/local/bin/node


//config
//var config = require("./config");


var fs = require('fs'),
    refParser = require('json-schema-ref-parser'),
    args = process.argv[2],
    output = "";

//console.log(args);


// iterates over each item in the directory

  execute = function(dir) {
  try {
    for (var i = 0, value = "", last = dir.length - 1; i < last; i++) {
      dir[i]; // waiting for logic
      value = dir[i]
    }
    return value;
  } catch(e) {
    return e.message;
  }

  };

  // gets files from directory
  fileList = function (dir) {
    return fs.readdirSync(dir);
  };


  statusHandler = function(err) {
  //throws error if there is a problem writing a file
  if (err) {
    return console.log(err + " !@# file writing problem");
  } else {
    return console.log("Parsed:");
  }
};

  compileRaml = function(file) {
  refParser.bundle(file, function(err, schema){
    try {
      fs.writeFile( output, JSON.stringify(file, null, 2), statusHandler(err) )
    } catch(err) {
      // throws error if file is not found
      return console.error(err + " !@#$ cannot find target file.");
    }
  })
}

;
//var
//  directory = files(args),
//  eachFile = execute(directory);
//  eachFile = execute("words");


















// Program is executable by running node app.js rel-Directory"

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