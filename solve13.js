// # 문제13 : 몇 번째 행성인가요?

// 우리 태양계를 이루고 있는 행성은 **수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성**으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.

// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.

// 예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

const readline = require('readline');

// 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const planet_arr = [
  '수성',
  '금성',
  '지구',
  '화성',
  '목성',
  '토성',
  '천왕성',
  '해왕성',
];
rl.question('입력: ', (n) => {
  // 입력 받은 값 확인

  process.stdout.write(planet_arr[n]);

  //   console.log();
  //   console.log(`You entered: ${typeof Number(n)}`);

  // 인터페이스 닫기
  rl.close();
});

// console.log('출력 : ', rl.question);
