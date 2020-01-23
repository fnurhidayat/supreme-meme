var fs = require ('fs');
var create = require('./create.js');
var read = require('./read.js');
var update = require('./update.js');
var args = process.argv.slice(2);

switch(args[0]) {
  case 'create_user':
    var name = args[1];
    var email = args[2];
    var password = args[3];
    
    create.user(name, email, password);
    break;
 
  case 'read_user':
    var id = args[1];
    console.log(read.user(id));
    break;
  
  case 'read_post':
    var id = args[1];
  
    console.log(read.post(id));
    break;
    
  case 'update_user':
    let id = args[1];
    let object = args[2]

    update.updateUser(id,object)
      .then(data => console.log(data))
      .catch(err => console.log(err))
    break;
  
  case 'update_post':
    var id = args[1];
    var object = args[2]
    
    console.log(update.updatePost(id,object));
    break;
    
  case 'create_post':
    var title = args[1];
    var body = args[2];

    create.post(title,body);
    break;
  default:
    console.log('Unknown operation!')
}



let isBanana = function(data) {
  return new Promise(function(resolve, reject) {
    if (data === 'Banana') {
      resolve({
          input: data,
          isBanana: true
      })
      return resolve('Yes')
    } else {
      reject('No');
    }
  })
}

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