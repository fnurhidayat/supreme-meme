
var create = require('./create.js');
var read = require('./read.js');
//var update = require('./update.js');
//var Delete = require('./delete.js');
var args = process.argv.slice(2);

switch(args[0]) {
  case 'create_user':
    var name = args[1];
    var email = args[2];
    var password = args[3];

    create.user({name, email, password}).then(data => {
      console.log(data);
    })
    .catch(err => {
    console.error(err);
    });
    break;
  
  case 'read_user':

    break;

  case 'update_user':

  case 'create_post':
    var title = args[1];
    var body = args[2];

    create.post(title,body);
    break;
  default:
    console.log('Unknown operation!')
}


/*var isBanana = function(data) {
  return new Promise (function(resolve,reject) {
    if (data === "Banana") {

      resolve ("Yes");
    } else{
      reject("No");
    }
  })
}

isBanana("Bukan Banana").then(data => {
  console.log(data);
})
.catch(err => {
console.error(err);
});

console.log('Uy uy');
*/

/*
let isTrue = true;
let promise = new Promise(function(resolve, reject){
  if (isTrue) {
    resolve("Hello World");
  }
  else {
    reject("Bye World");
  }
})

async function jalanin() {
  try {
    let result = await promise;
    console.log(result);
  }
  catch(err){
    console.log(err);
  }
}

jalanin();
*/