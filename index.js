var create = require('./create.js');
var read = require('./read.js')
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

  case 'update_user':

  case 'create_post':
    var title = args[1];
    var body = args[2];

    create.post(title,body);
    break;
  default:
    console.log('Unknown operation!')
}
