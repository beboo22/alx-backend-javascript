/**
 *
 *
 *
 */
const process = require('process');

const app = process;
app.stdout.write('Welcome to Holberton School, what is your name?\n');
app.stdin.on('data', (data) => {
  const input = data.toString().trim();
  console.log(`Your name is: ${input}`);
});
app.on('exit', () => {
  console.log('This important software is now closing');
});
