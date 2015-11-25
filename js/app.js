#!/usr/local/bin/node
var model, Model, Controller, controller;

Model = require('./src/model');
Controller = require('./src/controller');

model = new Model();
controller = new Controller();

console.log("Started");
console.log(controller.files(controller.folderRegion) + " unique log");
console.log(controller.folderRegion);

//console.log(model.getFiles(controller));
console.log("Finished");
//console.log(model.parse(controller));

//console.log(controller);