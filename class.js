const fs = require('fs');

class ActiveRecord {
    constructor(data) {
        this.table_name = data.table_name;
        this.data = data.data;
    }
    create(data) {
        fs.writeFileSync(`./data/${this.table_name}.json`, JSON.stringify(this.data, null, 2));
    }
    post

    
}
 save ()

class users extends ActiveRecord {
    constructor(data) {
        super({
            table_name: 'users',
            data: {
                id: data.id,
                name: data.name,
                email: data.email,
                password: data.password,
                
            }
        })
    }


}
    
let Rendra = new users({
    id: 3,
    name: "Rendra",
    email: "Rendranarendra@haha.com",
    password: 1234
});

Rendra.create({})
console.log(Rendra);

Rendra.save();