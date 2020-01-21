var create = require('./create.js');
var args = process.argv.slice(2);

switch(args[0]) {
  case 'create_user':
    var id = args[1];
    var name = args[2];
    var email = args[3];
    var password = args[4];
    
    create.user(name, email, password);
    break;
  case 'read_user':

    break;

  case 'update_user':

    break;
  default:
    console.log('Unknown operation!')
}
