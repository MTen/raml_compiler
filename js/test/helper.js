global.config = require('../config');
global.assert = require('chai').assert;
global.testArgDirectory = appRoot+"/test/lib/CO_2.0";
global.testSchema = appRoot+"/test/lib/CO_2.0/account.json";
global.badDirectory = appRoot+"/test/lib/badDirectory";
global.testOutput = appRoot+"/test/output/";
var fs = require('fs');

clearTestDir = function() {
  var files = fs.readdirSync(testOutput);
  for( var file of files){
    fs.unlinkSync(process.cwd()+"/test/output/"+file)
  }
};