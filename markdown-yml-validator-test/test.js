var fs = require('fs')
  , fm = require('front-matter')

var Validator = require('jsonschema').Validator;
var v = new Validator();
var schema = {
  "id": "/GuidesSchema",
  "type": "object",
  "properties": {
    "title": {"type": "string"},
    "description": {"type": "string"},
    "status": {
      "type": "string",
      "enum": ["active", "inactive","on-hold"]
    },
    "display": { "type": "boolean" }

  },
  "required":["title","description","status","display"]
};

fs.readFile('test_files/t2.md', 'utf8', function(err, data){
  if (err) throw err
 
  var {attributes} = fm(data)
  let x = v.validate(attributes, schema)
  if(x.errors.length > 0){
    console.log(x.errors) 
  }
  else{
    console.log(attributes);
  }

  
})

