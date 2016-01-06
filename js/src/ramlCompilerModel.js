module.exports = function(){
  var
    fs = require('fs'),
    refParser = require('json-schema-ref-parser');

  this.parse = function (controller) {
    var newName = controller.schema.replace(".json", "Compiled.json");
    var files = controller.targetFile;
    //refParser
    // bundle method which can handle circular references
    //  error: problem finding a file
    // successful: writes file with new name nameCompiled.json to /output folder
    //  error: writing file error message

    refParser.bundle(controller.targetFile, function (err, schema) {
      //TODO change to try, throw, catch block
      if (err) {

        return console.error(err + " unique target file problem");
      }else{
        fs.writeFile(
          controller.output + newName,
          JSON.stringify(schema, null, 2),
          function (err) {
            //throws error if there is a problem writing a file
            if (err) {
              return console.log(err + " unique file writing problem");
            }else {
              console.log("Parsed: " + newName );
            }
        });
      }
    })
  };

/* Future method for directory support
  this.getFiles = function(controller) {
    console.log(controller.files);
    for ( file in controller.files){
      console.log(file);
      if(file.match("/^((?!x-).)*$/" || "/^((?!raml).)*$/")) {
        console.log('ya')
      }
    }
  }
*/

};
