var assert = require('chai').assert;
var fs = require('fs');

var C = require("../../src/ramlCompilerController");
var c = new C();
console.log(C);
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

  describe("#Data", function(){
    //TODO setup before block for controller
    it( "#output", function(){

      assert.equal(c.output, "output/")
    });
    it("#targetFiles", function(){
      c.files("test/lib/");
      assert.include(c.targetFiles, "user.json", "things")
    })

  });

  describe("#files", function(){

    it("#Array", function(){
      assert.isArray(c.files("test/lib/CO_2.0"),  "not returning an array");
    });
    it("it contains a account.json", function(){
      assert.include(c.files("test/lib/CO_2.0"), "account.json", "library does not contain acccount.json")
    });
  })

});

// test
//it "opens files"
//it "gets directories"
