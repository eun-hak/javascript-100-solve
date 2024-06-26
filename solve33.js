// 문제33 : 거꾸로 출력하기
// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// 입출력

// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력 : ', (answer) => {
  // 방법 1
  console.log(answer.split(' ').reverse().join(' '));

  // 방법 2

  console.log(
    answer
      .split(' ')
      .map(Number)
      .sort((a, b) => b - a)
      .join(' '),
  );
  rl.close();
});
