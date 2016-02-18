if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var
      data = JSON.parse(responseBody),
      data = JSON.parse(responseBody),
      numberOfItems = data.length - 1,
      secondItem = Number.random(1, numberOfItems),
      setFirstItemID = data[0].itemID,
      setSecondItemID = data[secondItem].itemID;
    compiledSchema = {
      "type": "array",
      "items": {
        "type": "object",
        "$schema": "http://json-schema.org/schema",
        "properties": {
          "itemID": {
            "type": "string"
          },
          "brandID": {
            "type": "string",
            "description": "The item's parent brand."
          },
          "brandName": {
            "type": "string",
            "description": "The name of the item's parent brand."
          },
          "name": {
            "type": "string",
            "description": "A name for the item displayable to the user."
          },
          "price": {
            "type": "object",
            "$schema": "http://json-schema.org/schema",
            "properties": {
              "priceID": {
                "type": "string"
              },
              "unitPrice": {
                "type": "number",
                "description": "The top-line price for the item."
              }
            },
            "required": [
              "priceID",
              "unitPrice"
            ]
          },
          "package": {
            "type": "object",
            "$schema": "http://json-schema.org/schema",
            "properties": {
              "packageID": {
                "type": "string"
              },
              "name": {
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
                "description": "OZ, l, etc."
              },
              "containerName": {
                "type": "string",
                "description": "Keg, Bottle, Can, etc."
              }
            },
            "required": [
              "packageID",
              "itemCount",
              "itemSize",
              "unitCount",
              "unitOfMeasurement",
              "containerName"
            ]
          }
        },
        "required": [
          "itemID",
          "brandID",
          "name",
          "brandName",
          "price"
        ]
      }
    }
    ;

    // Null array bypass test
    if( typeof(data) == "object" && data.length == 0){
      tests["Check response for validity"] = false;
    }

    var vr = tv4.validateResult(data, compiledSchema);
    console.log(vr.valid);

    if(vr.valid) {
      tests["Quick Validation"] = vr.valid;

    }
    else {

      //Multiple Error validation
      var multiple = tv4.validateMultiple(data, compiledSchema);
      multiple.errors.forEach(function(err){

        tests["Schema Error - Message: "+ err.message] = false;

        //use google chrome console to inspect error objects
        console.log(err);

        //Uncomment this test to see exactly where the error is
        //tests["Schema Error - Object Path: " +err.dataPath+ " Message: "+ err.message] = false;
      });
      if(multiple.missing.length > 0) {
        multiple.missing.forEach(function(el){
          tests["Referenced schema is not present: " + el.message] = false;
        });
      }
    }

    //config for items by itemID test
    postman.setEnvironmentVariable("dataItemID", setFirstItemID);
    postman.setEnvironmentVariable("dataSecondItemID", setSecondItemID);
    tests["Response time is less than 30 seconds"] = responseTime < 30000;
  }catch(e){
    tests[e.message] = false;
  }
}