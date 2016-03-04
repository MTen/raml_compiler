if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
    tests["Response time is less than 30 seconds"] = responseTime < 30000;
  }
  catch(e){
    tests[e.message] = false;
  }
}