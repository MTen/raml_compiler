var assert = require('chai').assert;
var rootDir = "../../";
var sanityCheck = require( rootDir + "/src/sanityCheck");

describe("sanity", function(){
   it("imported chai use assertions", function(){
       assert.equal("yes", "yes")
       assert.notEqual( "yes", "no");
   });
   it("should get other files", function(){
   		assert.isDefined(sanityCheck, "found sanityCheck.js")
   });
});



