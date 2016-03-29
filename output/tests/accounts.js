if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    var compiledSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "description": "A representation of an AB InBev account.",
    "properties": {
      "custID": {
        "type": "string",
        "description": "The ID of the customer associated with this account."
      },
      "name": {
        "type": "string",
        "description": "The account's name."
      },
      "minimumCaseOrderRequirement": {
        "type": "number",
        "description": "The minimum number of cases or the total case equivalency an account must purchase when placing an order."
      },
      "totalCredit": {
        "type": "number",
        "description": "The total credit extended to an account."
      },
      "creditBalance": {
        "type": "number",
        "description": "The current credit remaining on an account."
      },
      "totalBalance": {
        "type": "number",
        "description": "The current credit balance remaining on an account."
      },
      "pastDue": {
        "type": "number",
        "description": "The current balance due for an account."
      },
      "routeID": {
        "type": "string",
        "description": "The account's route identifier which may be used to determine delivery options."
      },
      "paymentMethods": {
        "type": "array",
        "description": "An enumerated list of payment methods available to the account.",
        "items": {
          "enum": [
            "CASH",
            "CREDIT",
            "UNION_PAY"
          ]
        }
      },
      "orderDeadlines": {
        "type": "array",
        "description": "The time at which an order must be placed on a given day for it to be processed by the following morning.",
        "items": {
          "day": {
            "enum": [
              0,
              1,
              2,
              3,
              4,
              5,
              6
            ],
            "description": "Day of the week, enumerated. Sunday = 0, Saturday = 6."
          },
          "time": {
            "type": "string",
            "description": "The time of the order deadline in the format HH:mm:ss",
            "format": "date-time"
          }
        }
      },
      "representatives": {
        "type": "array",
        "items": {
          "type": "object",
          "description": "An account sales representative. Typically, an employee of a wholesaler.",
          "properties": {
            "representativeID": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            }
          },
          "required": [
            "name",
            "representativeID"
          ],
          "anyOf": [
            {
              "required": [
                "email"
              ]
            },
            {
              "required": [
                "phone"
              ]
            }
          ]
        }
      }
    },
    "required": [
      "custID",
      "name"
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