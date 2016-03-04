var generator = require(appRoot + "/src/testGenerator");

//////////////////////////////////////////
//testArgs & testSchema set in helper.js//
//////////////////////////////////////////

var directoryArray = generator.fileList(testArgDirectory);



describe("testGenerator", function(){

  it("is defined", function () {
    assert.isDefined(generator.fileList);
  });

  it("test directory has seed data", function(done){
    var check = fs.readdirSync(seedSchemaDirectory);
    assert.isOk(check, "yay");
    done();
  })
});

