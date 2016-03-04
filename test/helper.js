global.config = require('../config');
global.assert = require('chai').assert;

//
global.testArgDirectory = appRoot+"/test/lib/CO_2.0";
global.testSchema = appRoot+"/test/lib/CO_2.0/account.json";
global.badDirectory = appRoot+"/test/lib/badDirectory";

// overwriting config for testing... I think... it's untested.
global.outputSchemaDirectory = appRoot + "/test/output/schema/";
global.outputTestsDirectory = appRoot + "/test/output/tests/";


// refactor into same method that takes an argument
clearTestOutputSchemaDir = function() {
  var files = fs.readdirSync(outputSchemaDirectory);
  for( var file of files){
    fs.unlinkSync(outputSchemaDirectory + file)
  }
};
clearTestOutputTestsDir = function() {
  var files = fs.readdirSync(outputTestsDirectory);
  for( var file of files){
    fs.unlinkSync(outputTestsDirectory+file)
  }
};

