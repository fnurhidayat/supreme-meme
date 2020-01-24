const fs = require('fs');
class ActiveRecord {
    constructor(data) {
        this.table_name = data.table_name;
        this.data = data.data;
    }

    create() {
        var currentData = require(`${__dirname}/./data/${this.table_name}.json`) || [];
        currentData.push(this.data);
        fs.writeFileSync(`./data/${this.table_name}.json`, JSON.stringify(currentData, null, 2));
    }

    static updatePosts(id, object) {
        return new Promise(function (resolve, reject) {
            let posts = require(`${__dirname}/../data/posts.json`);
            const index = posts.findIndex(post => post.id == id);
            if (index < 0) {
                reject('user not found');
            }
            posts[index].title = object.title;
            posts[index].body = object.body;
            fs.writeFileSync(`${__dirname}/../data/posts.json`, JSON.stringify(posts, null, 2))
            resolve(posts, index);
        })

    }

    static updateUser (id, object){
        return new Promise(function(resolve, reject){
            let users = require(`${__dirname}/../data/users.json`);
            const index = users.findIndex(user => user.id == id);
        if (index < 0) {
            reject('user not found');
        }
        users[index].name = object.name;
        users[index].email = object.email;
        fs.writeFileSync(`${__dirname}/../data/users.json`, JSON.stringify(users, null, 2))
            resolve(users, index);
        })
    }

}
module.exports = ActiveRecord;