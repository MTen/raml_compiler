if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    var compiledSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "description": "A user-bound notification. For instance, a notification updating the user about the status of a scheduled delivery.",
    "properties": {
      "notificationID": {
        "type": "string",
        "description": "A unique ID for differentiating notification objects"
      },
      "notificationDescription": {
        "type": "string",
        "description": "A displayable description of the notification."
      },
      "isEnabled": {
        "type": "boolean",
        "description": "An indicator of whether the user has enabled this notification or not. By default, true."
      },
      "day": {
        "enum": [
          -1,
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "description": "Day of the week, enumerated. Sunday = 0, Saturday = 6. -1 denotes a notification that has no relationship to a given day."
      }
    },
    "required": [
      "notificationID",
      "description",
      "isEnabled",
      "day"
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