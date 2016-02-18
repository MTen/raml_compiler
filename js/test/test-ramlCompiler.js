var ramlCompiler = require(appRoot + "/src/ramlCompiler");
//testArgs & testSchema set in helper.js
var directoryArray = ramlCompiler.fileList(testArgDirectory);


describe("ramlCompiler", function(){


  describe("#fileList", function() {

    it("is defined", function () {
      assert.isDefined(ramlCompiler.fileList);
    });

    it("returns an array", function(){
      assert.isArray(ramlCompiler.fileList(testArgDirectory));
    });

    it("last value is x-wholesalers.json", function(){
      var lastFile = directoryArray.last;
      assert.equal,(lastFile, "x-wholesalers.json", "directory not right!" );
    });

    it("has more than 10 files in the array", function(){
      var arrayLength = directoryArray.length;
      assert.isTrue(arrayLength > 10);
    })

  });

  describe("#execute", function(){

    beforeEach(function(){
      clearTestDir(testOutput);
    });

    it("is defined", function(){
      assert.isDefined(ramlCompiler.execute(directoryArray));
    });

    it("returns success", function(){
      assert.equal(ramlCompiler.execute(directoryArray), "schema compiled");
    });

    it("should complain", function(){
      assert.equal(ramlCompiler.execute(badDir), "schema compiled");

    })

  });



});


