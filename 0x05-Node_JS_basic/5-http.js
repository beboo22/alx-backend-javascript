#!/usr/bin/node
const http = require('http');
const fs = require('fs').promises;

async function countStudents (path) {
  let db;
  try {
    db = await fs.readFile(path, 'utf-8');
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

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students');
    try {
      const result = await countStudents(process.argv[2]);
      res.end(result);
    } catch (e) {
      res.end(e.message);
    }
  }
});

app.listen(1245, () => {
  console.log('...');
});

module.exports = app;
