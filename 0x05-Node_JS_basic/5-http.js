const http = require('http');
const fs = require('fs').promises;

const countStudentsPromise = (path, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      await countStudents(path, res);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

async function countStudents(path, res) {
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

  res.write(`Number of students: ${num}\n`);
  let len = Object.keys(data).length;
  Object.entries(data).forEach(([key, val]) => {
    let cont = `Number of students in ${key}: ${val.length}. List: ${val.join(', ')}`;
      if (len !== 1) {
        cont += '\n';
      }
      len -= 1;
      res.write(cont);
  });

  res.end();
}

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      await countStudentsPromise(process.argv[2], res);
    } catch (e) {
      res.end(`Error: ${e.message}`);
    }
  }
});

app.listen(1245);

module.exports = app;
