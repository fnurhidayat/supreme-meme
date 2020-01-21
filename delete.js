function deleteUser(ID){
    var users = require('./data/users.json');
    for (let i=0; i< users.length;i++){
        console.log(i)
        if (ID == users[i].id){ 
            users.splice(i,1);
        }
    } 
    return users;
}

function deletePost(ID){
    var posts = require('./data/posts.json');
    for (let i=0; i< posts.length;i++){
        if (ID == posts[i]['id']){ 
            posts.splice(i,1);
        }
    } 
    return posts;
}
module.exports = {
    user: deleteUser,
    post: deletePost
};