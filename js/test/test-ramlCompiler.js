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
      assert.equal(lastFile, "x-wholesalers.json", "directory not right!" );
    });

    it("has more than 10 files in the array", function(){
      var arrayLength = directoryArray.length;
      assert.isTrue(arrayLength > 10);
    });

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

    it('does not process examples and raml files', function(){
      ramlCompiler.execute(directoryArray)
      var outputDirectory = appRoot+"/test/output/";
      console.log(outputDirectory);
      var output = fs.readdirSync(outputDirectory);
      console.log(fs.readdirSync(outputDirectory.toString()));
      assert.lengthOf(output, 22, "only json files were processed")
    });

    //it("should complain", function(){
    //  var bd = ramlCompiler.fileList(badDirectory);
    //  assert.equal(ramlCompiler.execute(bd), "schema compiled");
    //})

  });



});


