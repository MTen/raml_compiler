if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody),
      setItem = data[1].itemID,
      setSecondItem = data[2].itemID;

    //config for items by itemID test
    postman.setEnvironmentVariable("itemID", setItem);
    postman.setEnvironmentVariable("secondItemID", setSecondItem);
    tests["Response time is less than 30 seconds"] = responseTime < 30000;
  }
  catch(e){
    tests[e.message] = false;
  }
}