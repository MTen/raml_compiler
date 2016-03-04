# Usage
This app is intended to generate dereferenced JSON schema specifications.  

Use cases:  
- Setup for schema validation testing
- Ensure that the schema design is valid and required files are included in the directory  
- Lint examples to make sure they are valid json
- Use in conjunction with the Atom editor, Api Work bench, and Raml Spec to validate that everything is kosher.


## General Usage  

1. cd into the ~/:path/:to/raml-compiler    
2. npm run cleanup  
3. npm run compile relative_or_absolute_dir_where_schema_is_located  
4. open output/schema for compiled schema  

Note: Argument after compile MUST be a single directory

## Dependencies  
---
engine: >= node 4.5.103.33  
javascript: ES6

Check your version of node  
``` node -e 'console.log(process.versions.v8);' ```

## Setup  
----  
1. Clone this repo  
	```git clone git@gitlab.fuzzhq.com:mtener/raml-compiler.git```  
2. Change into the apps directory  
	``` cd raml-parser ```  
3. Install app dependencies  
	``` npm install ```  
4. Check to make sure things are kind of working  
	``` mocha ```  
5. Run the compiler on examples to get an idea of how it works  


#### Example 1
1. Compile
	``` npm run compile example/tapwiser-raml-spec ```  
2. Check the output/schema folder for the result  
	``` cd output/schema && ls ```  
3. Clean up the output folder for your next run  
	``` npm run cleanup```
	

#### Example 2
1. Compile
	``` npm run compile example/nested-definitions```  
2. Check the output/schema folder for the result  
	``` cd output/schema && ls ```  
3. Clean up the output folder for your next run  
	``` npm run cleanup```
