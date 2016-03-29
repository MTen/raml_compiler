if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    var compiledSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "description": "A bill issued to the account",
    "properties": {
      "invoiceID": {
        "type": "string",
        "description": "A unique identifier to differentiate invoice objects"
      },
      "date": {
        "type": "string",
        "description": "The date of the invoice.",
        "format": "date-time"
      },
      "cost": {
        "type": "number",
        "description": "The cost of the invoice."
      },
      "taxAmount": {
        "type": "number",
        "description": "The total tax charged to the order."
      },
      "discountAmount": {
        "type": "number",
        "description": "The total value of the discounts applied to the order."
      }
    },
    "required": [
      "invoiceID",
      "date",
      "cost",
      "discountAmount",
      "taxAmount"
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