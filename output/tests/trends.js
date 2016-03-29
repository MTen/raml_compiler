if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    var compiledSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "description": "A localized trend in beer sales.",
    "properties": {
      "trendID": {
        "type": "string",
        "description": "A unique identifier to differentiate trend objects"
      },
      "trendDescription": {
        "type": "string",
        "description": "A description of the trend presented to the user."
      },
      "sortOrder": {
        "type": "integer",
        "description": "The order in which this trend should appear relative to others. Trends are sorted from lowest sortOrder to highest."
      },
      "brand": {
        "description": "The brand associated with this trend.",
        "type": "object",
        "properties": {
          "glassware": {
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
            ]
          },
          "items": {
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
            }
          },
          "brandID": {
            "type": "string",
            "description": "A unique IDused to differentiate brand objects"
          },
          "alcoholContent": {
            "type": "string",
            "description": "The percentage of alchol in the brand's products."
          },
          "countryOfOrigin": {
            "type": "string"
          },
          "family": {
            "type": "string",
            "description": "An optional grouping for similar brands, for instance, Bud Light Lime and Bud Light may share a brand family."
          },
          "flavorDescription": {
            "type": "string"
          },
          "foodPairing": {
            "type": "string",
            "description": "Suggested foods to consume along with the brand."
          },
          "marketingCopy": {
            "type": "string",
            "description": "Marketing copy for the brand displayed in Brand Details."
          },
          "name": {
            "type": "string"
          },
          "romanceCopy": {
            "type": "string",
            "description": "A succinct description of the brand displayed in Product Ordering."
          },
          "servingTemperature": {
            "type": "string",
            "description": "The ideal condition to serve the brand's products."
          },
          "sortOrder": {
            "type": "number",
            "description": "Used to set the displayed order of brands in the app. Brands are sorted in ascending sortOrder."
          },
          "style": {
            "type": "string",
            "description": "The beer style of the brand, for instance, Indian Pale Ale."
          },
          "trueBrewer": {
            "type": "string",
            "description": "The actual brewer of the beer."
          },
          "imageURL": {
            "type": "string",
            "description": "A url or path to a local file."
          }
        },
        "required": [
          "brandID",
          "name",
          "imageURL",
          "items"
        ]
      }
    },
    "required": [
      "trendID",
      "description",
      "brand"
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