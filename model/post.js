const ActiveRecord = require(`./ActiveRecord.js`)

class Post extends ActiveRecord {
    constructor(data){
        super({
            table_name: 'posts',
            data: {
                title: data.title,
                body: data.body
            }
        })
    }
    static find(ID){
        return new Promise((resolve, reject) => {
        let temp = require(`./data/posts.json`)
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
        let temp = require(`./data/posts.json`)
        for (let i=0; i < temp.length;i++){
            if (ID == temp[i].id){
                temp.splice(i,1)
                resolve(temp);
            } 
        }
        reject('ID not found');
    })
    }
    static updatePosts(id, object){
        return new Promise(function(resolve, reject) {
            let posts = require('./data/posts.json');
            const index = posts.findIndex(post => post.id == id);
            if (index < 0) {
                reject('user not found');
            }
            posts[index].title = object.title;
            posts[index].body = object.body;
            fs.writeFileSync(`./data/posts.json`, JSON.stringify(posts, null, 2))
            resolve(posts, index);
        })
        
    }
    
}

module.exports = Post;