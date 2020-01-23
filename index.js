var create = require('./create.js');
var read = require('./read.js');
var update = require('./update.js');
var Delete = require('./delete.js');
var args = process.argv.slice(2);

switch(args[0]) {
  case 'create_user':
    var name = args[1];
    var email = args[2];
    var password = args[3];
    
    create.user(name, email, password);
    break;
 
  case 'read_user':
    var type = args[1]
    var id = args[2];
    User.find(type, id)
  
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

  case 'delete_user':
    var id = args[1];

    Delete.user(id);
    console.log(`User with ID number ${id} has been deleted`);
    break;

    case 'delete_post':
    var id = args[1];

    Delete.post(id);
    console.log(`Post with ID number ${id} has been deleted`);
    break;
  default:
    console.log('Unknown operation!')
}
