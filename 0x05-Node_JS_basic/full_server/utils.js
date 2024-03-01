#!/usr/bin/node
const fs = require('fs');
function readDatabase (path, res) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, d) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const db = d.split('\n');
      const data = {};
      let num = 0;
      db.forEach((row) => {
        const cols = row.split(',');
        if (cols.length === 4) {
          const dep = cols[3];
          const name = cols[0];
          if (data[dep] === undefined) {
            data[dep] = [name];
          } else {
            data[dep].push(name);
          }
          num += 1;
        }
      });
      delete data.field;
      num -= 1;
      resolve(data);
    });
  });
  return promise;
}

export default readDatabase;
module.exports = readDatabase;
