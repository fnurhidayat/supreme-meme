const User = require('./user.js')
const Post = require('./post.js')
var args = process.argv.slice(2);

switch(args[0]) {
  case 'create_user':
    var name = args[1];
    var email = args[2];
    var password = args[3];

    create.user(name, email, password);
    break;
 
  case 'read_user':
    var id = args[1]
    User.find(id)
    .then(data => {console.log(data)})
    .catch(err => {console.log(err)})
    break;
  
  case 'read_post':
    var id = args[1];
  
    console.log(Post.find(id));
    break;
    
  case 'update_user':
    var id = args[1];
    var object = args[2]
    User.updateUser(id,object)
      .then(data => console.log(data))
      .catch(err => console.log(err))
    break;
  
  case 'update_post':
    var id = args[1];
    var object = args[2]
    Post.updatePosts(id,object)
      .then(data => console.log(data))
      .catch(err => console.log(err))
    
  case 'create_post':
    var title = args[1];
    var body = args[2];

    create.post(title,body);
    break;

  case 'delete_user':
    var id = args[1];

    User.Delete(id);
    console.log(`User with ID number ${id} has been deleted`);
    break;

    case 'delete_post':
    var id = args[1];

    Post.Delete(id);
    console.log(`Post with ID number ${id} has been deleted`);
    break;
  default:
    console.log('Unknown operation!')
}



// let isBanana = function(data) {
//   return new Promise(function(resolve, reject) {
//     if (data === 'Banana') {
//       resolve({
//           input: data,
//           isBanana: true
//       })
//       return resolve('Yes')
//     } else {
//       reject('No');
//     }
//   })
// }

// isBanana('Bukan Banana')
// .then(data => {
//   console.log(data); 
// })
//   .catch(err => {
//     console.error(err);
//   });

//   console.log('Uy uy')



  // let isTrue = true;
  // let promise = new Promise(function(resolve, reject) {
  //   if (isTrue) {
  //     resolve('Hello World');
  //   } else {
  //     reject('Bye world!');
  //   }
  // })

  // async function jalanin() {
  //   try {
  //     let result = await promise;
  //     fs.writeFile('./contoh.txt', 'Hello World', function(err, data) {
  //       console.log('Data created!')
  //     })
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }

  // jalanin();