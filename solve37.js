// 문제37 : 반장 선거
// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력 : ', (answer) => {
  const arr = answer.split(' ');

  const counts = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  let maxKey = ' ';
  let MaxValue = 0;
  for (const key in counts) {
    if (counts[key] > MaxValue) {
      MaxValue = counts[key];
      maxKey = key;
    }
  }

  console.log(`${maxKey}(이)가 총 ${MaxValue}표로 반장이 되었습니다.`);
  rl.close();
});
