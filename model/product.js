const ActiveRecord = require('./ActiveRecord.js');

class Product extends ActiveRecord {
    static table_name = 'products';

    constructor(data) {
      super({
          name: data.name,
          price: data.price,
          stock: data.stock,
        })
    }
    
    //Method Override
    save(){
    return new Promise((resolve, reject) => {
      if (!this.name || !this.price || !this.stock){
        reject("Please enter necessary product information!");
      }
      
      else {
        super.save().then(i => resolve(i))}
    })
  }
}

module.exports = Product;