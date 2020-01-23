const fs = require('fs');
class ActiveRecord{
    constructor(data){
        this.table_name = data.table_name;
        this.data = data.data;
    }
    save(){ 
    }

    updatePost(){
    }
    static updateUser(id, object){
        return new Promise(function(resolve, reject) {
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
    console.log (updateUser());
        
        // var args = process.argv.slice(2)
        // var id = args[0]
        // var obj = JSON.parse(args[1]); 

module.exports = ActiveRecord; 