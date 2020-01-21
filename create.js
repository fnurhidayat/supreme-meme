var fs = require('fs');

function createUser(id, name, email, password) {
  if (!name && !email && !password) {
    console.log("Data isn't valid!");
    return;
  }

  let user = [{
    id: id,
    name: name,
    email: email,
    password: password,
  }]

  var newuser = require(`./data/users.json`);

  user.push({
    id, name, email, password
  });

  fs.writeFileSync(
    `./data/users.json`,
    JSON.stringify(user, null, 2)
  ); 

  console.log('Data created!')
}

module.exports = {
  user: createUser,
  //post: createPost
};
