const ActiveRecord = require(`./ActiveRecord.js`)

class User extends ActiveRecord {
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
    static find(ID){
        return new Promise((resolve, reject) => {
        let temp = require(`./data/users.json`)
        for (let i=0; i < temp.length; i++){
            if (ID == temp[i].id){
                resolve (temp[i]);
            }
        }
        reject('ID not found');
    })
    }
    static Delete(ID){
        return new Promise((resolve, reject) => {
        let temp = require(`./data/users.json`)
        for (let i=0; i < temp.length;i++){
            if (ID == temp[i].id){
                temp.splice(i,1)
                resolve(temp);
            } 
        }
        reject('ID not found');
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