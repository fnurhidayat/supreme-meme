const ActiveRecord = require(`./ActiveRecord.js`)

class Post extends ActiveRecord {
    static table_name = 'posts';

    constructor(data){
        super({
            title: data.title,
            body: data.body
        })
    }

    //Method Override
    save(){
        return new Promise((resolve, reject) => {
          if (!this.title || !this.body){
            reject("There is no title or body on the post");
          }
          
          else {
            super.save().then(i => resolve(i))}
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