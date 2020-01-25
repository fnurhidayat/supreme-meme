const ActiveRecord = require('./ActiveRecord.js');

class User extends ActiveRecord {
    static table_name = 'users';

    constructor(data) {
      super({
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        })
    }
    
    //Method Override
    save(){
    return new Promise((resolve, reject) => {
      if (this.password !== this.password_confirmation){
        reject("Password does not match");
      }
      
      else {
        delete this.password_confirmation;
        super.save().then(i => resolve(i))}
    })
  }


    static updateUser(id, object) {
        return new Promise(function (resolve, reject) {
            let users = require('./data/posts.json');
            const index = users.findIndex(user => user.id == id);
            if (index < 0) {
                reject('user not found');
            }
            users[index].name = object.name;
            users[index].email = object.email;
            fs.writeFileSync(`./data/users.json`, JSON.stringify(users, null, 2))
            resolve(users, index);
        })
    }
}
module.exports = User;