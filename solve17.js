const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력 : ', (n) => {
  if (n > 150) {
    console.log('yes');
  } else {
    console.log('no');
  }

  rl.close();
});
