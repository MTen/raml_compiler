//
var path = require('path');
var underscore = require('underscore');
var fileSystem = require('fs');

global.appRoot = path.resolve(__dirname);
global._ = underscore;
global.fs = fileSystem;

//used for quickly testing junk
global.hardCodedDir = "/Users/mtener/Dropbox/fuzz/code/api-projects/tapwiser-parser/js/lib/tapwiser-api-specification/Master/schema";

//this is where the output
global.outputSchemaDirectory = appRoot + "/output/schema/";
global.outputTestsDirectory = appRoot + "/output/tests/";
