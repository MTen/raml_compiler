var
  assert = require('chai').assert,

  app = require("../../app");

describe("App", function(){
  it("app: defined", function(){
    assert.isDefined(app, "app.js exists")
  });
  it("app: object", function(){
    assert.isObject(app, "app.js imported model")
  });
  it("app: not function", function(){
    assert.isNotFunction(app, "App.js not function.")
  });
  it("app.arguments", function(){
    //TODO needs setup object
    //assert.equal(app.execute(), "../this")
  })
  it("GRAW", function(){

  })
});