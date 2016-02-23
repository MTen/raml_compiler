var
  path = require('path'),
  underscore = require('underscore'),
  fileSystem = require('fs');

global.appRoot = path.resolve(__dirname);
global._ = underscore;
global.fs = fileSystem;