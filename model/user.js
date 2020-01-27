const ActiveRecord = require(`./ActiveRecord.js`);
const fs = require('fs');

class User extends ActiveRecord {
    static table_name = "users"
    constructor(data) {
        super({
            table_name: 'users',
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        })
    }
    static find(ID) {
        return new Promise((resolve, reject) => {
            let temp = require(`./data/users.json`)
            for (let i = 0; i < temp.length; i++) {
                if (ID == temp[i].id) {
                    resolve(temp[i]);
                }
            }
            reject('ID not found');
        })
    }
    static Delete(ID) {
        return new Promise((resolve, reject) => {
            let temp = require(`./data/users.json`)
            for (let i = 0; i < temp.length; i++) {
                if (ID == temp[i].id) {
                    temp.splice(i, 1)
                    resolve(temp);
                }
            }
            reject('ID not found');
        })
    }
    //Method Override
    save() {
        return new Promise((resolve, reject) => {
            if (this.password !== this.password_confirmation) {
                reject("Password does not match");
            }

            else {
                delete this.password_confirmation;
                super.save().then(i => resolve(i))
            }
        })
    }
}

module.exports = User;