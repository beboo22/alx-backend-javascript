/**
 *
*
*
*/
const fs = require('fs');

function countStudents (path) {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) throw new Error('Cannot load the database');
  });
  fs.readFile(path, 'utf-8', (readErr, data) => {
    if (readErr) throw new console.Error('Cannot load the database');
    const result = data.split('\n').map((line) => line.split(','));
    result.pop(result.length - 1);
    console.log(`Number of students: ${result.length - 1}`);
    const filed = result[0][[result[0].length - 1]];
    const csstd = result.filter((std) => std[3] === 'CS');
    console.log(csstd);
    const csstd1 = result.filter((std) => std[3] === 'SWE');
    console.log(csstd1);
  });
}
module.exports = countStudents;
