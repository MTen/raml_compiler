var generator = require(appRoot + "/src/testGenerator");

//////////////////////////////////////////
//testArgs & testSchema set in helper.js//
//////////////////////////////////////////

var directoryArray = testGenerator.fileList(testArgDirectory);



describe("testGenerator", function(){
  beforeEach(function(){
    testGenerator.executeGenerator(directoryArray);
  });

  afterEach(function(){
    clearOutputDir(testOutput);
  });
  it("is defined", function () {
    assert.isDefined(testGenerator.fileList);
  });

  it("returns a list of files in an array", function(done){
    var check = fs.readdirSync(outputDirectory);
    assert.isOk(check, "yay");
    done();
  })
});

