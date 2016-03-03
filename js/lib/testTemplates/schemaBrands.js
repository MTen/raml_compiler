if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    var compiledSchema = @clipboard;

    //Quick Validation
    var vr = tv4.validateResult(data, compiledSchema);
    if(vr.valid) {
      tests["Quick Validation"] = vr.valid;
    }else{
      //Multiple Error validation
      var multiple = tv4.validateMultiple(data, compiledSchema);

      multiple.errors.forEach(function (err) {
        tests["Schema Error - Message: " + err.message + ". Open chrome dev tools and rerun test to see error path."] = false;
        //use google chrome dev tools console to inspect error objects
        console.log(err);
      });
    }
    tests['Empty Array Bypass test'] = JSON.stringify(data).indexOf('[]') === -1;
    tests["Response time is less than 30 seconds"] = responseTime < 30000;

    //Config
    // Prevents getting a brand that has no items
    var brands = data.filter(brand => {
      if(brand.items.length > 0){
        return brand;
      }
    });

    // sets a random brand
    var randomBrand = brands.sample();
    postman.setEnvironmentVariable("dataBrandID", randomBrand.brandID);

  } catch(e) {
    tests[e.message] = false;
  }
}