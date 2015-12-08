var assert = require('chai').assert;
var rootDir = "../../";

var app = require(rootDir + "app");
describe("App", function(){
  it("app: defined", function(){
    assert.isDefined(app, "app.js exists")
  });
  it("app: object", function(){
    assert.isObject(app, "App.js imported model")
  });
  it("app: not function", function(){
    assert.isNotFunction(app, "App.js not function.")
  });
});