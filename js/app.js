#!/usr/local/bin/node
var model, Model, Controller, controller, region, file;
var path = require('path');
global.appRoot = path.resolve(__dirname);

Model = require('./src/model');
Controller = require('./src/controller');

model = new Model();
controller = new Controller();

// Executable by running node app.js

region = "/Users/mtener/Dropbox/fuzz/code/api-projects/tapwiser-parser/js/lib/CO_2.0/";
file = "user.json";

//Takes controller.setFile takes a File and assigns it in the controller object
controller.setFile( region, file);


// Takes a controller object and dereferences the json.
model.parse(controller);

console.log("Finished");