// //초기 변수 세팅
// for (let n = 1; n <= 5; n++) {
//   console.log(`${n} 학생 안녕하세요.`);
// }

// for (let i = 0; i < 5; i++) {
//   console.log(`${i}`);
// }

// 구구단 2단 출력
let level = 7;

for (let line = 1; line <= 9; line++) {
  console.log(`${level} x ${line} = ${level*line}`);
}
console.log(`구구단 ${level}단 종료`);

console.log(`=====================================`);

// 1 ~ n까지의 합
let total = 0;
let n = 1;

for(n=0; n < 11; n++){
  total += n;
}
console.log(`${total}`);
console.log(`1 ~ ${n}까지의 합 : ${total}`);
