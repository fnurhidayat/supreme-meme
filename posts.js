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
}

module.exports = Post;