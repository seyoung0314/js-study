// 매개변수(parameter) : 함수가 실행할 때 외부에서 전달받는 값

// 언어를 알려주면 그 언어로 인사해주는 함수
// 기본값 `한국어`
function greet(language = `한국어`) {
  // 변수를 안주면 undefined 전달
  console.log(`language : ${language}`);

  switch (language) {
    case `한국어`:
      console.log(`안녕하세요!`);
      break;
    case `영어`:
      console.log(`hello!`);
      break;
    case `일본어`:
      console.log(`곤니치와!`);
      break;
    default:
      console.log(`변수없음`);
  }
}
// 함수에 전달하는 값 : 인자(argument)
greet(`영어`);
greet();

console.log(`=====================================`);

// x ~ y 사이의 랜덤정수를 생성
function makeRandomInteger(x, y) {
  let rn = Math.floor(Math.random() * (y - x + 1)) + x;
  console.log(`${x} ~ ${y} 랜덤정수 : ${rn}`);

  // 여러개를 반환해야 할 땐 배열이나 객체 사용
  return rn;
}

// 리턴값을 rn에 저장
let rn = makeRandomInteger(1, 3);

if (rn === 1) {
  console.log(`랜덤정수 1입니다.`);
}
if (makeRandomInteger(1, 3) === 1) {
  console.log(`랜덤정수 1입니다.`);
}

console.log(`=====================================`);

// 매개변수가 없는 함수
// f(x) = 2;

function fiveHello() {
  for (let i = 0; i < 5; i++) {
    console.log(`hello ${i}`);
  }
}

fiveHello();
// js에선 인자에 어떤값을 넣어도 돌아감
// java는 안되고 C는 되긴하는데 에러메세지 나옴
fiveHello(4);
