if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    var compiledSchema = {
  "type": "object",
  "properties": {
    "promotions": {
      "type": "array",
      "items": {
        "type": "object",
        "description": "An object for featuring a brand or cocktail in the Browse portion of the app",
        "properties": {
          "brand": {
            "description": "A brand associated with the promotion. Note: a promotion is always associated with a brand, a cocktail, a list of products, or a link, but never with more than one.",
            "type": "object",
            "properties": {
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
              "imageURL"
            ]
          },
          "items": {
            "description": "Items associated with the promotion. If a single item is specified, the app will navigate to a product details screen. Else, a product list. Note: a promotion is always associated with a brand, a cocktail, a list of products, or a link, but never with more than one.",
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
          "link": {
            "type": "string",
            "description": "An external URL to open when the promotion is selected."
          },
          "promotionID": {
            "type": "string"
          },
          "bannerImageURL": {
            "type": "string",
            "description": "The primary image associated with the promotion."
          }
        },
        "required": [
          "promotionID",
          "bannerImageURL"
        ],
        "oneOf": [
          {
            "required": [
              "brand"
            ]
          },
          {
            "required": [
              "items"
            ]
          },
          {
            "required": [
              "link"
            ]
          }
        ]
      },
      "minItems": 1,
      "uniqueItems": true
    },
    "categories": {
      "type": "array",
      "items": {
        "type": "object",
        "description": "A collection of items or brands. For instance, the Bud Light category may group the Bud Light, Bud Light Lime, and Bud Light Rita brands.",
        "properties": {
          "brands": {
            "description": "The brands associated with this category. Note that categories are always associated with a list of brands or a list of items, never both.",
            "type": "array",
            "items": {
              "type": "object",
              "description": "A collection of identically flavored beverages. For instance, all packages of Bud Light would be grouped under the Bud Light brand, but separated from packages of Bud Light Lime.",
              "properties": {
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
                "imageURL"
              ]
            },
            "minItems": 1,
            "uniqueItems": true
          },
          "items": {
            "description": "The items associated with this category. Note that categories are always associated with a list of brands or a list of items, never both.",
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
          "categoryID": {
            "type": "string",
            "description": "A unique ID used to differentiate category objects."
          },
          "type": {
            "enum": [
              "brandFamily",
              "regulars",
              "suggestedItems",
              "gifts",
              "groupedByCountry",
              "packaging",
              "alphabetical",
              "productOrdering"
            ],
            "description": "brandFamily: a grouping of similar brands; regulars: a grouping of regularly ordered products; suggestedItems: a grouping of items suggested for an account; gifts: a group of loyalty awards; groupedByCountry: all brands sectioned by country; packaging: all items grouped by packaging; alphabetical: all brands arranged alphabetically; productOrdering: an arbitrary group of products."
          },
          "name": {
            "type": "string",
            "description": "The name of the category."
          },
          "sortOrder": {
            "type": "integer",
            "description": "The order in which this category should appear relative to others. Categories are sorted from lowest sortOrder to highest."
          },
          "iconImageURL": {
            "type": "string",
            "description": "The primary image associated with this category."
          },
          "backgroundImageURL": {
            "type": "string",
            "description": "The background image associated with this category."
          }
        },
        "required": [
          "categoryID",
          "type",
          "name",
          "iconImageURL",
          "backgroundImageURL"
        ],
        "anyOf": [
          {
            "required": [
              "brands"
            ]
          },
          {
            "required": [
              "items"
            ]
          }
        ]
      },
      "minItems": 1,
      "uniqueItems": true
    }
  },
  "required": [
    "promotions",
    "categories"
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