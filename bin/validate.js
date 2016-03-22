#!/usr/local/bin/node
var config = require("../config.js");
var jsonValidator = require("../src/jsonValidator");

// Program is executable by running node app.js rel-Directory output Dir"
var args = process.argv;


var folder = args[2] || appRoot+"/output/";
//var folder = args[2] || appRoot+"/lib/tapwiser-api-specification/Master";

var clearArgs = jsonValidator.sanitizeInput(folder);
console.log(clearArgs);

try {
  fs.writeFileSync(`${outputDirectory}validation-results.json`, '');
  var files = jsonValidator.fileList(clearArgs);
  var resourceToExampleMap = {
    "account.json": "x-account.json",
    "accounts.json": "x-accounts.json",
    "authentication.json": "x-authentication.json",
    "beerCocktail.json": null,
    "beerCocktails.json": "x-beerCocktails.json",
    "brand.json": "x-brand.json",
    "brands.json": "x-brands.json",
    "browse.json": "x-browse.json",
    "categories.json": "x-categories.json",
    "category.json": "x-category.json",
    "deliveryAddresses.json": "x-deliveryAddresses.json",
    "deliveryWindows.json": "x-deliveryWindows.json",
    "discount.json": null,
    "discounts.json": "x-discounts.json",
    "empties.json": "x-empties.json",
    "estimatedPrice.json": "x-estimate.json",
    "estimatedPrices.json": "x-estimates.json",
    "features.json": "x-features.json",
    "gift.json": null,
    "gifts.json": "x-gifts.json",
    "glassware.json": null,
    "invoice.json": "x-invoice.json",
    "invoices.json": "x-invoices.json",
    "item.json": "x-item.json",
    "items.json": "x-items.json",
    "merchandise.json": "x-merchandise.json",
    "merchandiseTypes.json": "x-merchandiseTypes.json",
    "negotiatedFreeProducts.json": "x-negotiatedFreeProducts.json",
      //x-notification,
    "notifications.json": "x-notifications.json",
    "order.json": "x-order.json",
    "orderItem.json": null,
    "orderItems.json": null,
      //x-orderAnalyses.json,
      //x-orderAnalysis.json
    "orders.json": "x-orders.json",
    "package.json": null,
    "pointActions.json": null,
    "points.json": "x-points.json",
      //x-pointsHistory.json,
    "price.json": null,
    "prices.json": "x-prices.json",
    "pricing.json": "x-pricing.json",
    "promotions.json": null,
    "representatives.json": null,
      //x-regulars.json,
    "search.json": "x-search.json",
    "singleMerchandise.json": null,
    "suggestedOrderItems.json": "x-suggestedOrder.json",
    "trends.json": "x-trends.json",
    "truck.json": "x-truck.json",
    "user.json": "x-user.json",
    "users.json": null,
    "videos.json": "x-videos.json",
    "wholesalers.json": "x-wholesalers.json"
  };
  jsonValidator.execute(resourceToExampleMap);
}catch(err){
  console.log("top level error", err);
}
