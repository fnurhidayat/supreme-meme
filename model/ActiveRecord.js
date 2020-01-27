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
    save() {
        return new Promise((resolve, reject) => {
            let files;
            fs.readdir(`${__dirname}/../data/`, (err, data) => {
              files = data;
      
              let filename = this.constructor.table_name + '.json';
      
              files = files.filter(i => i == filename);
              if (files.length == 0) {
                fs.writeFileSync(`${__dirname}/../data/${filename}`, '[]');
              }
      
              let dataFile = require(`${__dirname}/../data/${filename}`);
              dataFile.push({
                id: (dataFile.length + 1),
                ...this
              });
      
              fs.writeFileSync(`${__dirname}/../data/${filename}`, JSON.stringify(dataFile, null, 2)); 
            }) 
          })
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

    static update(id, updateParams) {
        return new Promise((resolve, reject) => {
            let data = require(`${__dirname}/../data/${this.table_name}.json`);
            const index = data.findIndex(i => i.id == id);
            if (index < 0) {
                reject(`${this.table_name} not found`);
            }
            data[index] = {
                ...data[index],
                ...updateParams
            };
            fs.writeFileSync(`${__dirname}/../data/${this.table_name}.json`, JSON.stringify(data, null, 2))
            resolve(data, index);
        })

    }
}
module.exports = ActiveRecord;