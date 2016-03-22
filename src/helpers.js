module.exports = {
  fileList: function (dir) {

    try {
      this.targetDirectory = dir;
      this.schemaDirectory = dir + "/schema/";
      this.examplesDirectory = dir + "/examples/";
      this.fileArray = fs.readdirSync(this.schemaDirectory);
      return this.fileArray;
    }catch(err){
      console.log("FileList: " + err.message);
      throw new Error( err + " :: directory Error");
    }
  },
  sanitizeInput: function(str){
    var len = str.length;
    if(str[len - 1] === "/"){
      return str.slice("/", -1);
    }
    return str
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
  }
};