if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    var compiledSchema = {
  "type": "object",
  "properties": {
    "glasswareID": {
      "type": "string",
      "description": "A unique identifier for differentiating glassware objects"
    },
    "imageURL": {
      "type": "string",
      "description": "A path to the glassware's image."
    },
    "glasswareDescription": {
      "type": "string",
      "description": "A description of the glassware."
    },
    "name": {
      "type": "string",
      "description": "A name for the glassware, e.g. Pint Glass."
    }
  },
  "required": [
    "glasswareID",
    "glasswareDescription",
    "imageURL",
    "name"
  ],
  "$schema": "http://json-schema.org/draft-04/schema#"
}

    //Quick Validation
    var vr = tv4.validateResult(data, compiledSchema);
    if(vr.valid) {
      tests["Quick Validation"] = vr.valid;
    } else {
      //Multiple Error validation
      var multiple = tv4.validateMultiple(data, compiledSchema);

      multiple.errors.forEach(function (err) {
        tests["Schema Error - Message: " + err.message + ". Open chrome dev tools and rerun test to see error path."] = false;
        //use google chrome dev tools console to inspect error objects
        console.log(err);
      });

      if(multiple.missing.length > 0) {
        multiple.missing.forEach(function(el){
          tests["Referenced schema is not present: " + el.message] = false;
        });
      }
    }
    tests['Empty Array Bypass test'] = JSON.stringify(data).indexOf('[]') === -1;
    tests["Response time is less than 30 seconds"] = responseTime < 30000;

  }catch(e){
    tests[e.message] = false;
  }
}