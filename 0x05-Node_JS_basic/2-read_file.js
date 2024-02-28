#!/usr/bin/node
const fs = require('fs');

async function countStudents(path) {
  let db;
  try {
    db = fs.readFileSync(path, 'utf-8');
    db = db.split('\n').map((line) => line.split(','));
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const data = {};
  let num = 0;

  db.forEach((element) => {
    if (element.length === 4) {
      const field = element[3];
      const name = element[0];
      if (data[field] === undefined) {
        data[field] = [name];
      } else {
        data[field].push(name);
      }
      num += 1;
    }
  });

  delete data.field;
  num -= 1;

  console.log(`Number of students: ${num}`);
  Object.entries(data).forEach(([key, val]) => {
    console.log(`Number of students in ${key}: ${val.length}. List: ${val.join(', ')}`);
  });
}

module.exports = countStudents;
