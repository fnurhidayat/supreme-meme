const ActiveRecord = require(`./ActiveRecord.js`)
const fs = require('fs');



class Post extends ActiveRecord {
    static table_name = "posts"
    constructor(data) {
        super({
            title: data.title,
            body: data.body
        })
    }
    static find(ID) {
        return new Promise((resolve, reject) => {
            let temp = require(`./data/posts.json`)
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
            let temp = require(`./data/posts.json`)
            for (let i = 0; i < temp.length; i++) {
                if (ID == temp[i].id) {
                    temp.splice(i, 1)
                    resolve(temp);
                }
            }
            reject('ID not found');
        })
    }
}

module.exports = Post;