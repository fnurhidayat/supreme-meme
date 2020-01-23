const fs = require('fs');
class ActiveRecord{
    constructor(data){
        this.table_name = data.table_name;
        this.data = data.data;
    }
    save(){ 
    }

    update(){

    }
    delete(){

    }
}

module.exports = ActiveRecord;