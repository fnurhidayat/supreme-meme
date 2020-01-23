const fs = require('fs');
class ActiveRecord{
    constructor(data){
        this.table_name = data.table_name;
        this.data = data.data;
    }
    save(){ 
    }
    
    static find(type, ID){
        let temp = require(`./data/${type}.json`)
        for (let i=0; i < temp.length;i++){
            if (ID == temp[i].id)
                console.log(temp[i])
        }
    }
    update(){

    }
    delete(){

    }
}

module.exports = ActiveRecord;