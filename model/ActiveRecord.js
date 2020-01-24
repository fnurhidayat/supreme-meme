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

    static find(ID) {
        return new Promise((resolve, reject) => {
            let temp = require(`../data/${this.table_name}.json`)
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
            let temp = require(`../data/${this.table_name}.json`)
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

module.exports = ActiveRecord;