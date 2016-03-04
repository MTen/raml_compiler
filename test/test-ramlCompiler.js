var ramlCompiler = require(appRoot + "/src/ramlCompiler");

//////////////////////////////////////////
//testArgs & testSchema set in helper.js//
//////////////////////////////////////////


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
      var lastFile = directoryArray.slice(-1)[0];
      assert.equal(lastFile, "x-wholesalers.json", "directory not right!" );
    });

    it("has more than 10 files in the array", function(){
      var arrayLength = directoryArray.length;
      assert.isTrue(arrayLength > 10);
    });

  });

  describe("#executeCompiler", function(){

    beforeEach(function(){
      clearTestData(outputSchemaDirectory);
    });

    it("is defined", function(done){
      assert.isDefined(ramlCompiler.executeCompiler(directoryArray));
      done();
    });

    it("returns success", function(){
      ramlCompiler.executeCompiler(directoryArray);
    });

    //it("should complain", function(){
    //  var bd = ramlCompiler.fileList(badDirectory);
    //  assert.equal(ramlCompiler.execute(bd), "schema compiled");
    //})

  });

  after(function(){
    clearTestData(outputSchemaDirectory);
  })



});


