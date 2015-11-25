var model = require("../src/model");
var assert = require("assert");

describe("sanity", function(){
   it("should use assertions", function(){
       assert.equal("hello", "hello");
       assert.equal( "no", "no")
   })
});

describe("Model", function(){
    describe("#files", function(){
       it.skip("is an array", function(){
           assert.equal(Array(), files)
       })
    })
})

//it "opens files"
//it "deletes files"
//it "gets directories"
//it
