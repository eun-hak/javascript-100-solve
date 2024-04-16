const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력 : ', (n) => {
  const reverse = n.split('').reverse().join('');
  console.log(reverse);
  rl.close();
});
