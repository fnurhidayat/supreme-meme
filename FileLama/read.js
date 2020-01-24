function readUser(ID){
    // validator kalau ID nya bukan number

    if (ID != Number) {
        console.log("masukin angka woi!")
    }

    if (ID.length >= 5) {
        console.log("Kepanjangan woi!")
    }

    var users = require('./data/users.json');
    for (let i=0; i< users.length;i++){
        console.log(i)
        if (ID == users[i].id){ 
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