/**
 *
 *
 *
 */
const process = require('process');

const app = process;
app.stdout.write('Welcome to Holberton School, what is your name?\n');
app.stdin.on('data', (data) => {
  const input = data.toString();
  app.stdout.write(`Your name is: ${input}`);
});
app.on('exit', () => {
  app.stdout.write('This important software is now closing\n');
});
