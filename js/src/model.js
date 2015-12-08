module.exports = function(){
  var fs = require('fs');
  var refParser = require('json-schema-ref-parser');
 // this.files = nil;

  this.parse = function (controller) {
    var newName = controller.schema.replace(".json", "Compiled.json");

    refParser.bundle(controller.targetFile, function (err, schema) {
      if (err) {
        console.error(err + " unique target file problem");
      }
      else {
        fs.writeFile( controller.output + newName, JSON.stringify(schema, null, 2), function (err) {
          if (err) return console.log(err + " unique file writing problem");
        });
      }
    })
  };

  this.getFiles = function(controller) {
    console.log(controller.files);
    for ( file in controller.files){
      console.log(file);
      if(file.match("/^((?!x-).)*$/" || "/^((?!raml).)*$/")) {
        console.log('ya')
      }
    }
  }

};
