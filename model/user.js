const ActiveRecord = require(`./ActiveRecord.js`)

class User extends ActiveRecord {
    static table_name = 'users';

    constructor(data){
        super({
            table_name: 'users',
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        })
    }

    static updateUser (id, object){
        return new Promise(function(resolve, reject){
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