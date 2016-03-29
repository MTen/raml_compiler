if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    var compiledSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "description": "A video from AB Marketing.",
    "properties": {
      "videoID": {
        "type": "string"
      },
      "name": {
        "type": "string",
        "description": "The name displayed for this video."
      },
      "videoDescription": {
        "type": "string",
        "description": "A short description of the video."
      },
      "duration": {
        "type": "integer",
        "description": "The duration of the video in seconds."
      },
      "url": {
        "type": "string",
        "description": "A URL from which this video may be streamed."
      },
      "date": {
        "type": "string",
        "description": "The date this video was published.",
        "format": "date-time"
      },
      "isFeatured": {
        "type": "boolean",
        "description": "Featured videos may receive special UI treatment or be sorted to the top of the video list."
      }
    },
    "required": [
      "videoID",
      "name",
      "description",
      "duration",
      "date",
      "isFeatured",
      "url"
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