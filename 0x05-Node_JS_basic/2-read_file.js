const fs = require('fs');

function countStudents (path) {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) throw new Error('Cannot load the database');
  });
  const db = fs.readFileSync(path, 'utf-8');
  const result = db.split('\n').map((line) => line.split(','));
  const data = {};
  let num = 0;
  result.forEach((element) => {
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
