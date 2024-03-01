#!/usr/bin/node
const fs = require('fs');

function countStudents (path) {
  let data = null;
  try {
    data = fs.readFileSync(path, 'utf8');
    data = data.split('\n');
  } catch (e) {
    throw Error('Cannot load the database');
  }
  const departs = {};
  let num = 0;
  data.forEach((row) => {
    const cols = row.split(',');
    if (cols.length === 4) {
      const dep = cols[3];
      const name = cols[0];
      if (departs[dep] === undefined) {
        departs[dep] = [name];
      } else {
        departs[dep].push(name);
      }
      num += 1;
    }
  });
  delete departs.field;
  num -= 1;
  console.log(`Number of students: ${num}`);
  for (const [key, value] of Object.entries(departs)) {
    console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
  }
}

module.exports = countStudents;
