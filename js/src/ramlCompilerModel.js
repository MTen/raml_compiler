module.exports = function(){
  var
    fs = require('fs'),
    refParser = require('json-schema-ref-parser');


  //TODO schema is undefined
  this.parse = function (controller)
  {
    var
      file = controller.schema,
      output = controller.output;
    console.log(file + " unique");

    // refParser.bundle can handle circular references
    refParser.bundle(file, function (err, schema) {
      try {
        //throws error if there is a problem writing to file
        fs.writeFile( output, JSON.stringify(file, null, 2), statusHandler(err) )
      } catch(err) {
        // throws error if file is not found
        return console.error(err + " !@# cannot find target file.");
      }
      });
  };


};
