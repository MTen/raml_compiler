var config = require("../config.js");

var clearOutput = function(dir) {
  var files = fs.readdirSync(dir);
  for( var file of files){
    fs.unlinkSync(dir + file)
  }
};

clearOutput(outputSchemaDirectory);
clearOutput(outputTestsDirectory);

fs.writeFileSync(outputSchemaDirectory+".placeholder");
fs.writeFileSync(outputTestsDirectory+".placeholder");
