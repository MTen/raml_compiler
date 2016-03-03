if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    tests["Response time is less than 30 seconds. Time: " + responseTime] = responseTime < 30000;
    tests["username - value check"] = postman.getEnvironmentVariable("userName") === "mtener@fuzzproductions.com";
    tests["password - value check"] = postman.getEnvironmentVariable("password") === "amelie88";

    var
      user = data.user,
      accounts = data.user.accounts,
      firstAccount = data.user.accounts[0];
    // Config
    postman.setEnvironmentVariable("token", data.token);
    postman.setEnvironmentVariable("userID", user.userID);
    postman.setEnvironmentVariable("wholesalerID", firstAccount.wholesalerID);
    postman.setEnvironmentVariable("custID", firstAccount.custID);
  }
  catch(e){
    tests[e.message] = false;
  }
}
