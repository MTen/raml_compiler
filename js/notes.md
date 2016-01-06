### App  
Main file creates a new ramlCompiler  
- accepts command line args and passes them to the ramlCompiler

### src/ramlCompiler
- Has access to controller and model public methods  
- acts as data store
- 

### src/ramlCompilerController
- acts on the ramlCompiler object  
- public method files #move to Model   
 - accepts directory
 - returns array of files in directory
- public method setFile (deprecieated)

### src/ramlCompilerModel
- acts on the ramlCompiler object  
- public method parse  
 - takes
 - note: too many concerns
