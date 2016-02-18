var
  fs = require('fs'),
  refParser = require('json-schema-ref-parser'),

  // private fields
  output = process.cwd()+"/test/output/",
  targetDir = "";


module.exports = {

  // iterates over each item in the directory
  //public
  execute: function(dir) {
    try {
      for (var file = 0, d = dir, last = dir.length; file < last; file++) {
        this.compileSchema(dir[file])
      }
      return "schema compiled"
    }
    catch(e) {
      return e.message;
    }
  },
  //public
  // gets files from directory
  fileList: function (dir) {
    this.targetDir = dir;
    this.fileArray = fs.readdirSync(dir);
    return this.fileArray;
  },



  // private
  // compilesSchema
  compileSchema: function(file) {
    try {
      refParser.bundle(this.targetDir + "/" + file, function (err, schema) {
        var num = 0;
        fs.writeFile(output + file, JSON.stringify(schema, null, 2), function (err) {
          //throws error if there is a problem writing a file
          if (err) {
            return console.log(err + " :: file writing problem");
          } else {
            num += 1
          }})
      })
    } catch (err) {
      // throws error if file is not found
      return console.error(err + " :: cannot find target file.");
    }
  }

};

