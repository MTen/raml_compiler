var assert = require('chai').assert;
var rootDir = "../../";

var C = require(rootDir + "src/controller");
var c = new C();

describe("Controller", function(){
  it("controller: defined", function(){
    assert.isDefined(c, "Controller.js did not import")
  });
  it("controller: object", function(){
    assert.isObject(c, "Controller is not an objects")
  });
  it("controller.files", function(){
    assert.isFunction(c.files, "files is not a function")
  });
  describe("controller data", function(){
    //TODO setup before block for controller
    it( "contains the following fields", function(){
      assert.equal(c.output, "output/")
    });
  });
});

//it "opens files"
//it "gets directories"