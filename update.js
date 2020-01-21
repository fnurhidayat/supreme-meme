var users = require('./data/users.json');
var posts = require('./data/posts.json');
var fs = require('fs');

//update users
function updateUser (id, object){
    const index = users.findIndex(user => user.id == id);
    users[index].name = object.name;
    users[index].email = object.email;
    fs.writeFileSync(`./data/users.json`, JSON.stringify(users, null, 2))
    console.log(users);
}

var args = process.argv.slice(2)
var id = args[0]
var obj = JSON.parse(args[1]);


//update posts
function updatePosts (id, object){
    const index = posts.findIndex(post => post.id == id);
    posts[index].title = object.title;
    posts[index].body = object.body;
    fs.writeFileSync(`./data/posts.json`, JSON.stringify(posts, null, 2))
    console.log(posts);
}

var args = process.argv.slice(2)
var id = args[0]
var obj = JSON.parse(args[1]);


module.exports = {
    updateUser: updateUser,
    updatePost: updatePosts
  };
