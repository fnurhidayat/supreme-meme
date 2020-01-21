var fs = require('fs');

function createUser(name, email, password) {
  if (!name && !email && !password) {
    console.log("Data isn't valid!");
    return;
  }

  var user = require('./data/users.json');

  let user = [{
    id: id,
    email: email,
    password: password,
    password_confirmation: password_confirmation
  }]

  user.push({
    id: user.length + 1,
    name: name,
    email: email,
    password: password,
  })

  fs.writeFileSync(
    `./data/users.json`,
    JSON.stringify(user, null, 2)
  ); 

  console.log('Data created!')
}

function createPost(title, body) {
  if (!title && !body) {
    console.log("Data isn't valid!");
    return;
  }

  var post = require('./data/posts.json');

  post.push({
    id: post.length + 1,
    title: title,
    body: body,
  })

  fs.writeFileSync(
    `./data/posts.json`,
    JSON.stringify(post, null, 2)
  ); 

  console.log('Data created!')
}


module.exports = {
  user: createUser,
  post: createPost
};
