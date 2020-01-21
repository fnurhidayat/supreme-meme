function readUser(ID){
    var users = require('./data/users.json');
    for (let i=0; i< users.length;i++){
        if (ID == users[i]['id']){ 
            users = users[i]
        }
    } 
    return users;
}
module.exports = {
    user: readUser,
//    post: readPost
};