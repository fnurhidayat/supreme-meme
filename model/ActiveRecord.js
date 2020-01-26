const fs = require('fs');
class ActiveRecord {
    static table_name;

    constructor(data) {
        for (let i in data) {
            this[i] = data[i];
        }
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
                let newData = {
                    id: (dataFile.length + 1),
                    ...this
                }
                dataFile.push(newData);

                fs.writeFileSync(`${__dirname}/../data/${filename}`, JSON.stringify(dataFile, null, 2));
                resolve(newData)
            })
        })
    }


    static find(ID = 0) {
        return new Promise((resolve, reject) => {
            let temp = require(`../data/${this.table_name}.json`)
            if (ID == 0) {
                resolve(temp);
            }
            else {
                for (let i = 0; i < temp.length; i++) {
                    if (ID == temp[i].id) {
                        resolve(temp[i]);
                    }
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

    static remove(ID) {
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