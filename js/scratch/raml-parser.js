var raml = require('raml-parser');
var fs = require('fs');

var region = "../tapwiser-api-specification/MX_3.0/api.raml"
var output = "./mexico.raml"


var definition = [
    '#%RAML 0.8',
    '---',
    'title: MyApi',
    'baseUri: ../tapwiser-api-specification/MX_3.0/api.raml',
    '/Root:'
  ].join('\n');

  raml.compose(definition).then( function(rootNode) {
    console.log('Root Node: ' + rootNode)
  }, function(error) {
    console.log('Error parsing: ' + error);
  });




// raml.composeFile(region)
// .then(
// 	function(rootNode) {
// 		wstream.write(rootNode);
// 	},
// 	function(error) {
// 		console.log('Error parsing: ' + error);
// 	})

// var myApi = function() {

// raml.loadFile(region).then( function(data) {
// 	console.log(data);
// }, function(error) {
//     console.log('Error parsing: ' + error);
// })
//}

// fs.writeFile("./mexico.raml", myApi, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// });

