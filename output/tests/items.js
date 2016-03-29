if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    var compiledSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "description": "A beverage product that may be purchased.",
    "properties": {
      "itemID": {
        "type": "string",
        "description": "A unique identifier for differentiating item objects."
      },
      "brandID": {
        "type": "string",
        "description": "The item's parent brand."
      },
      "brandName": {
        "type": "string",
        "description": "The name of the item's parent brand."
      },
      "inventoryCount": {
        "type": "integer",
        "description": "The number of items currently in stock. Specify 0 for out of stock or unavailable items and -1 for unknown."
      },
      "name": {
        "type": "string",
        "description": "A name for the item displayable to the user."
      },
      "popularityRating": {
        "type": "number",
        "description": "An arbitrary float representing how popular this item is. Items with greater popularityRatings will sort to the top by default."
      }
    },
    "required": [
      "itemID",
      "brandID",
      "name",
      "brandName",
      "inventoryCount",
      "package",
      "price"
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