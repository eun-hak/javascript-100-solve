const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력:', (input) => {
  const [var1, var2, var3] = input.split(' ').map(Number);

  console.log((var1 + var2 + var3) / 3);
  rl.close();
});
