// for (let i = 1; i<=5; i++){
//   console.log(`${i}번`);
// }

// for 문: 반복 횟수가 명확할 때, 인덱스를 사용해
// 요소에 접근할 때.

// while 문: 조건에 따라 반복이 필요할 때,
// 초기값을 모를 때, 무한 루프가 필요한 경우.

let i = 1;
while (i <= 5) {
  console.log(`${i}번`);
  i++;
}

console.log(`=====================================`);

//50안에 있는 2의 배수를 가로로 출력하기

let result = "";
let n = 2;
while (n <= 50) {
  result += `${n} `;
  n += 2;
}
console.log(result);
console.log(`===========================================`);

// 1~50 사이의 6의 배수 출력하기

let result2 = "";
let j = 6;
while (j <= 50) {
  result2 += `${j} `;
  j += 6;
}
console.log(result2);
console.log(`===========================================`);

// 1~100 사이의 7의 배수이면서 14의 배수가 아닌 수 출력하기

let result3 = "";
let k = 7;
while ( k <= 100) {
  k += 7;
  if (k % 14 !== 0) {
    result3 += `${k} `;
  }
}
console.log(result3);

console.log(`===========================================`);

// 7777안에 있는 3의 배수 갯수 알아내기

let count = 0;
let m = 3;
while ( m <= 7777) {
  m += 3;
  count++;
}
console.log(`3의 배수의 총 갯수 : ${count}`);
