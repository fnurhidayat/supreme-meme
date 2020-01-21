function readUser(ID){
    var users = require('./data/users.json');
    for (let i=0; i< users.length;i++){
        if (ID == users[i]['id']){ 
            users = users[i];
            delete users['password'];
        }
    } 
    return users;
}

function readPost(ID){
    var posts = require('./data/posts.json');
    for (let i=0; i< posts.length;i++){
        if (ID == posts[i]['id']){ 
            posts = posts[i]
        }
    } 
    return posts;
}
module.exports = {
    user: readUser,
    post: readPost
};