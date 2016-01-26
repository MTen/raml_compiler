var
  assert = require('chai').assert,
  app = require("../../app"),
  testArgs = "/Users/mtener/Dropbox/fuzz/code/api-projects/tapwiser-parser/js/lib/CO_2.0";

console.log(app);
describe("App", function(){

  it("exists", function(){
    assert.isDefined(app, "works")
  });
  describe("#fileList", function() {

    it("is defined", function () {
      assert.isDefined(fileList);
    });

    it("takes returns an array", function(){
      assert.isArray(fileList(testArgs));
    });

    it("last value is x-wholesalers.json", function(){
      var directoryArray = fileList(testArgs);
      var lastFile = directoryArray.last;
      assert.equal,(lastFile, "x-wholesalers.json", "directory not right!" )
    })

  });

  describe("#execute", function(){
    it("is defined", function(){
      assert.isDefined(execute(testArgs));
    });
  });

  describe("#statusHandler", function(){
    it("is defined", function(){
      assert.isDefined(statusHandler);
    })
  })
});


