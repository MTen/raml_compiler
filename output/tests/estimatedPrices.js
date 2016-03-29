if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    var compiledSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "description": "A user-defined estimate of how much they will sell a product for",
    "properties": {
      "estimatedPriceID": {
        "type": "string",
        "description": "A unique identifier for differentiating estimatedPrice objects"
      },
      "estimate": {
        "type": "number",
        "description": "The estimated price of sale."
      },
      "itemID": {
        "type": "string",
        "description": "The itemID of the estimated item."
      },
      "servingSize": {
        "type": "integer",
        "description": "The serving size, for drafts, at which the item will be sold."
      }
    },
    "required": [
      "estimatedPriceID",
      "estimate",
      "itemID",
      "servingSize"
    ]
  },
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