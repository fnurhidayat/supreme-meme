var create = require('./create.js');
var read = require('./read.js');
var update = require('./update.js');
var args = process.argv.slice(2);

switch(args[0]) {
  case 'create_user':
    var name = args[1];
    var email = args[2];
    var password = args[3];
    
    create.user(name, email, password);
    break;
 
  case 'read_user':
    var id = args[1];
    console.log(read.user(id));
    break;
  
  case 'read_post':
    var id = args[1];
  
    console.log(read.post(id));
    break;
    
  case 'update_user':
    var id = args[1];dd
    var object = args[2]

    console.log(update.updateUser(id,object));
    break;
  
  case 'update_post':
    var id = args[1];
    var object = args[2]
    
    console.log(update.updatePost(id,object));
    break;
    
  case 'create_post':
    var title = args[1];
    var body = args[2];

    create.post(title,body);
    break;
  default:
    console.log('Unknown operation!')
}
