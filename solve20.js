const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력 : ', (n) => {
  const [var1, var2] = n.split(' ').map(Number);

  console.log(var1 / var2, var1 % var2);

  rl.close();
});
