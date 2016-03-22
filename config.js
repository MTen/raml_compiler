//
var path = require('path');
var underscore = require('underscore');
var fileSystem = require('fs');

global.appRoot = path.resolve(__dirname);
global._ = underscore;
global.fs = fileSystem;

//this is where the output
global.outputDirectory = appRoot + "/output/";
global.outputSchemaDirectory = appRoot + "/output/schema/";
global.outputExampleDirectory = appRoot + "/output/examples/";
global.outputTestsDirectory = appRoot + "/output/tests/";

