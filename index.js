const User = require('./model/user.js');
const Post = require('./model/post.js');
const express = require('express');
var args = process.argv.slice(2);
const app = express()

app.use(express.json());


// Update user
app.put('/users/:id', function (req,res) {
  User.updateUser(req.params.id, req.body)
  .then(data => res.send(data))
  .catch(err => res.send(err))
})


// Update post
app.put('/posts/:id', function (req,res) {
  User.updatePosts(req.params.id, req.body)
  .then(data => res.send(data))
  .catch(err => res.send(err))
})
app.listen(3000, () => console.log('Listening to port 3000!'))






// switch(args[0]) {
//   case 'create_user':
//     var currentUser = require('./data/users.json');
//     var newUser = new User ({
//       id: currentUser.length + 1,
//       name: args[1],
//       email: args[2],
//       password: args[3],
//     })

//     newUser.create();
//     break;
 
//   case 'read_user':
//     var id = args[1]
//     User.find(id)
//     .then(data => {console.log(data)})
//     .catch(err => {console.log(err)})
//     break;
  
//   case 'read_user':
//     var id = args[1]
//     User.find(id)
//     .then(data => {console.log(data)})
//     .catch(err => {console.log(err)})
//     break;
  
//   case 'read_post':
//     var id = args[1];
  
//     console.log(Post.find(id));
//     break;
    
//   case 'update_user':
//     var id = args[1];
//     var object = {
//       name: args[2],
//       email: args[3]
//     }
//     User.updateUser(id,object)
//       .then(data => console.log(data))
//       .catch(err => console.log(err))
//     break;
  
//   case 'update_post':
//     var id = args[1];
//     var object = {
//       title: args[2],
//       body: args[3]
//     }
//     Post.updatePosts(id, object)
//       .then(data => console.log(data))
//       .catch(err => console.log(err))
//     break;
//   // case 'create_post':
//   //   var title = args[1];
//   //   var body = args[2];

//   //   Post.create(title,body);
//   //   break;

//   case 'delete_user':
//     var id = args[1];

//     User.Delete(id);
//     console.log(`User with ID number ${id} has been deleted`);
//     break;

//     case 'delete_post':
//     var id = args[1];

//     Post.Delete(id);
//     console.log(`Post with ID number ${id} has been deleted`);
//     break;
//   default:
//     console.log('Unknown operation!')
// }