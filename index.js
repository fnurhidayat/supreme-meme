const User = require('./model/user.js')
const Post = require('./model/post.js')
var args = process.argv.slice(2);

switch (args[0]) {
  case 'create_user':
    let [
      name,
      email,
      password,
      password_confirmation
    ] = args.slice(1)

    let user = new User({
      name, email, password, password_confirmation
    });

    user.save()
      .then(data => { console.log(data) })
      .catch(err => { console.log(err) })
    break;

  case 'create_post':
    let [
      body,
      title,
    ] = args.slice(1)

    let post = new Post({
      body, title
    });

    post.save()
      .then(data => { console.log(data) })
      .catch(err => { console.log(err) })
    break;

  case 'read_user':
    var id = args[1]
    User.find(id)
      .then(data => { console.log(data) })
      .catch(err => { console.log(err) })
    break;


  case 'read_post':
    var id = args[1];
    Post.find(id)
      .then(data => { console.log(data) })
      .catch(err => { console.log(err) })
    break;

  case 'update_user':
    var id = args[1];
    var object = args[2]
    User.updateUser(id, object)
      .then(data => console.log(data))
      .catch(err => console.log(err))
    break;

  case 'update_post':
    var id = args[1];
    var object = args[2]
    Post.updatePosts(id, object)
      .then(data => console.log(data))
      .catch(err => console.log(err))

  case 'delete_user':
    var id = args[1];
    User.Delete(id)
      .then(data => { console.log(data) })
      .catch(err => { console.log(err) })
    break;

  case 'delete_post':
    var id = args[1];
    Post.Delete(id)
      .then(data => { console.log(data) })
      .catch(err => { console.log(err) })
    break;

  default:
    console.log('Unknown operation!')
}