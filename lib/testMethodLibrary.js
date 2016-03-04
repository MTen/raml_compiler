// Endpoint verification
if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){
  try{
    var data = JSON.parse(responseBody);
  }
  catch(e){
    tests[e.message] = false;
  }
}


// Null array bypass test
// If this test fails the api is trying to bypass schema validation by supplying an empty array.
tests['Empty Array bypass check'] = JSON.stringify(data).indexOf('[]') === -1;



//Schema Validation
if(tests["Response Code " + responseCode.code ] = responseCode.code === 200){

  var data = JSON.parse(responseBody);

  var compiledSchema ={
    placeholder: "put your compiled schema here"
  };

  try{
    //Quick Validation
    var vr = tv4.validateResult(data, compiledSchema);
    console.log(vr.valid);
    if(vr.valid) {
      tests["Quick Validation"] = vr.valid;

    }else{

      //Multiple Error validation
      var multiple = tv4.validateMultiple(data, compiledSchema);
      multiple.errors.forEach(function(err){
        tests["Schema Error: " + err.message] = false
      });
      if(multiple.missing.length > 0) {
        multiple.missing.forEach(function(el){
          tests["Referenced schema is not present: " + el.message] = false
        });
      }
    }
  } catch(e) {
    tests[e.message] = false;
  }
}

// Note - uses sugar.js library
// Creates a new array from original json data with only items that have a minimum order quantity greater than 0
// -- then grabs a random item from the sub array, and assigns its itemID and
var itemsWithMinimumOrderFieldArray = data.filter(function(item){
  var minimumOrderQuantity = item.minimumOrderQuantity;
  return minimumOrderQuantity > 0;
});

var item = itemsWithMinimumOrderFieldArray.sample();
var itemID = item.itemID;
var itemMinimumOrderQuantity = item.minimumOrderQuantity;
postman.setEnvironmentVariable("dataItemID", itemID);
postman.setEnvironmentVariable("orderItemCount", itemMinimumOrderQuantity);


// grabs all the values from an array with specified key.
// then sets an environment variable with all keys
var itemIDs = data.map(item => item.itemID);
postman.setEnvironmentVariable("dataItemIDs", itemIDs);

// use to clear state in your final call.
postman.clearEnvironmentVariable("dataItemIDs");


// dynamically set data variable
var property = 'invoiceId';
postman.setEnvironmentVariable("data"+property.camelize(), data.sample()[property]);


// check for unique names and prices in array of items
var data = JSON.parse(responseBody);
var itemIDs = postman.getEnvironmentVariable('dataItemIDs').split(',');
var randomOrderID = data.sample().orderID;

postman.setEnvironmentVariable('dataOrderID', randomOrderID);

var allOrderItems = data.map(order => order.pricing.orderItems).flatten();
var allItemIDs = allOrderItems.map(orderItem => orderItem.item);
var allItemNames = allOrderItems.map(orderItem => orderItem.name);

var numberOfUniqueItems = allItemIDs.unique().length;
var numberOfUniqueNames = allItemNames.unique().length;

console.log("items" + numberOfUniqueItems);
console.log("items " + numberOfUniqueNames);


tests["All orders:" + data.length] = true;
tests["ItemIDs are varied. Number of Unique Items: " + numberOfUniqueItems] = numberOfUniqueItems > 3;
tests["Item IDs in order history are relevant"] = itemIDs - allItemIDs.unique() !== itemIDs.length;
tests["Response time is less than 30 seconds"] = responseTime < 30000;
tests['itemIDs match itemNames'] = numberOfUniqueItems - numberOfUniqueNames == 0

// check for unique pricingIDs and unique orderIDs in an array
try{
  var data = JSON.parse(responseBody);
  var orderIDs = [];
  var pricingIDs = [];
  var orderItemID = [];

  data.forEach(function(orderItem){
    orderIDs.add(orderItem.orderID);
    pricingIDs.add(orderItem.pricing.pricingID);
  })

  tests[orderIDs.length + " unqiue orderIDs: " + pricingIDs.unique().length] = (orderIDs.length === orderIDs.unique().length) ? true : false;
  tests[pricingIDs.length + " unqiue pricingIDs: " + pricingIDs.unique().length] = (pricingIDs.length === pricingIDs.unique().length) ? true : false;

}
catch(e){
  tests[e.message] = false;
}


