if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    var compiledSchema = {
  "type": "object",
  "description": "A description of a beverage container. For instance, four six-packs of 12oz bottles.",
  "properties": {
    "packageID": {
      "type": "string",
      "description": "A unique ID used to differentiate package objects"
    },
    "name": {
      "type": "string"
    },
    "imageURL": {
      "type": "string"
    },
    "itemCount": {
      "type": "integer",
      "description": "The number of bottles/cans/kegs in a single container. If a package contains 2 6-packs, 6."
    },
    "itemSize": {
      "type": "number",
      "description": "The volume of a single keg, bottle, or can in a package."
    },
    "returnable": {
      "type": "boolean",
      "description": "Marks whether the package may be returned or not."
    },
    "unitCount": {
      "type": "number",
      "description": "The number of containers in a package. If a package contains 2 6-packs, 2."
    },
    "unitOfMeasurement": {
      "type": "string",
      "enum": [
        "OZ",
        "oz",
        "l",
        "L",
        "mL",
        "ML",
        "cc",
        "CC"
      ]
    },
    "containerName": {
      "type": "string",
      "description": "Keg, Bottle, Can, etc."
    },
    "caseEquivalency": {
      "type": "number",
      "description": "The number of cases the package equates to."
    },
    "adjustedCaseEquivalency": {
      "type": "number",
      "description": "The value used to determine this packages contribution to achieving the order minimum. This property may be used to increase or reduce the effect of adding a given package to an order."
    }
  },
  "required": [
    "packageID",
    "name",
    "itemCount",
    "itemSize",
    "unitCount",
    "unitOfMeasurement",
    "containerName"
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