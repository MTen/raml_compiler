if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    var compiledSchema = @clipboard;

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
    }
    tests['Empty Array Bypass test'] = JSON.stringify(data).indexOf('[]') === -1;
    tests["Response time is less than 30 seconds"] = responseTime < 30000;

    // Config
    var
      user = data.user,
      accounts = data.user.accounts,

      randomAccount = accounts.sample(), // use this to provide better test coverage. 
      preferredAccount = accounts[0], // use this if a specific Account has more desirable testing conditions

      selectedAccount = preferredAccount; //set as either randomAccount or preferredAccount




    // Config
    postman.setEnvironmentVariable("dataToken", data.token);
    postman.setEnvironmentVariable("dataUserID", user.userID);
    postman.setEnvironmentVariable("dataWholesalerID", selectedAccount.wholesalerID);
    postman.setEnvironmentVariable("dataCustID", selectedAccount.custID);

  } catch(e) {
    tests[e.message] = false;
  }
}else{
  // set these values to your testing username and password you set in the env file.
  tests["username - value check"] = postman.getEnvironmentVariable("userName") === "";
  tests["password - value check"] = postman.getEnvironmentVariable("userPassword") === "";
}
