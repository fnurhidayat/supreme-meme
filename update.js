var user = require('./data/users.json');

function updateUser (id, object){
    for (var i = 0; i < user.length; i++) {
        if (user[i].id === id) {
          JSON.parse('{ "name":"John", "email":30, "city":"New York"}');
          break;
        }
    }
}