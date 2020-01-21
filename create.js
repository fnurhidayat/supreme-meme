var fs = require('fs');

function createUser(email, password, password_confirmation) {
  if (!email && !password && !password_confirmation) {
    console.log("Data isn't valid!");
    return;
  }

  if (password !== password_confirmation) {
    console.log("Password and its confirmation doesn't match!");
    return;
  }

  let user = [{
    id: id,
    email: email,
    password: password,
    password_confirmation: password_confirmation
  }]

  URLSearchParams.push({
    id, name, email, password
  })

  let files = fs.readdirSync('./data');
  fs.writeFileSync(
    `./data/${files.length + 1}.json`,
    JSON.stringify(user, null, 2)
  ); 

  console.log('Data created!')
}


module.exports = createUser;
