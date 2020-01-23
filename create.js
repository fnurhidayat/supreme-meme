var fs = require('fs');

/*
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
*/

function createUser (data){
  return new Promise(function(resolve, reject) {
    if (!data.name || !data.email || !data.password){
      reject ("Invalid Data")
    };

    let users = require('./data/users.json') || [];
    data.id = users.length + 1;

    let {
      id,
      name,
      email,
      password,
    } = data;

    users.push({
      id,
      name,
      email,
      password,
    });

    fs.writeFileSync(
      `./data/users.json`,
      JSON.stringify(users, null, 2)
    ); 

    resolve({
      id, name, email
    });
  })
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

