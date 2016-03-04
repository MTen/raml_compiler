// library imports
var config = require('../config');

// private fields
var output = outputTestsDirectory;


module.exports = {

  executeGenerator: function(dir, template) {
    try {
      for (var file = 0, dirLength = dir.length, last = dirLength; file < last; file++) {
        var f = dir[file];
        var result = this.checkFileType(f);

        switch( result ){
          case "example":
            break;
          case "json":
            this.createTests(f,template);
            break;
          case "other":
            break;
        }
      }
      return "schema compiled";
    }
    catch(e) {
      console.log(e.message);
      return e.message;
    }

  },

  checkFileType: function(file) {
    if (file.match(/(^\w*(.json)$)/)) {
      return "json"
    }
    else if(file.match(/(raml)/)){
      return "raml"
    }
    else if(file.match(/^(x-)\w*(.json)$/)){
      return "example"
    }
    else{
      return "other"
    }
  },

  fileList: function (dir) {
    try {
      this.targetDir = dir;
      this.fileArray = fs.readdirSync(dir);
      return this.fileArray;
    } catch (e) {
      console.log(e.message);
      throw new Error(e + " :: directory Error");
    }
  },

  createTests: function(file, template) {
    var temp = template.toString();
    var schema =  JSON.parse(fs.readFileSync(this.targetDir + file), "utf-8");
    var bundledSchema = JSON.stringify(schema, null, 2);
    var test = temp.replace("@clipboard;", bundledSchema);
    file = file.slice(0, -2)
    fs.writeFileSync(output + file, test);
  }

};
