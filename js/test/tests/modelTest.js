var assert = require('chai').assert;
var rootDir = "../../";

var M = require(rootDir +"src/model");
var m = new M();


describe("Model", function(){
  it("model: defined", function(){
    assert.isDefined(m, "Model.js did not import")
  });
  it("model: Object", function(){
    assert.isObject(m, "Model is not an object")
  });
  it("model.parse: Function", function(){
    assert.isFunction(m.parse, "parse is not a function")
  });
  it("model.getFiles: Function", function(){
    assert.isFunction(m.getFiles, "getFiles is not a function")
  })
});