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
}

module.exports = User;