global.config = require('../config');
global.assert = require('chai').assert;

//
global.testArgDirectory = appRoot+"/test/lib/CO_2.0";
global.testSchema = appRoot+"/test/lib/CO_2.0/account.json";
global.badDirectory = appRoot+"/test/lib/badDirectory";
global.seedSchemaDirectory = appRoot+"/test/lib/seedSchemaDirectory"

// overwriting config for testing... I think... it's untested.
global.outputSchemaDirectory = appRoot + "/test/output/schema/";
global.outputTestsDirectory = appRoot + "/test/output/tests/";


// refactor into same method that takes an argument

clearTestData = function(dir) {
  var files = fs.readdirSync(dir);
  for( var file of files){
    fs.unlinkSync(dir + file)
  }
};

