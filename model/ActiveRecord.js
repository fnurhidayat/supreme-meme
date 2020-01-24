const fs = require('fs');
class ActiveRecord{
    constructor(data){
        this.table_name = data.table_name;
        this.data = data.data;
    }
    
    create(){
        var currentData = require(`${__dirname}/./data/${this.table_name}.json`) || [];
        currentData.push(this.data);
        fs.writeFileSync(`./data/${this.table_name}.json`, JSON.stringify(currentData, null, 2));
}

module.exports = ActiveRecord;