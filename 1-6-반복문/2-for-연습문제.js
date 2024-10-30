//50안에 있는 2의 배수를 가로로 출력하기

let result = "";
for (let i = 2; i <= 50; i += 2) {
  result += `${i} `;
}
console.log(result);
console.log(`===========================================`);

// 1~50 사이의 6의 배수 출력하기

let result2 = "";
for (let j = 6; j <= 50; j += 6) {
  result2 += `${j} `;
}
console.log(result2);
console.log(`===========================================`);

// 1~100 사이의 7의 배수이면서 14의 배수가 아닌 수 출력하기

let result3 = "";
for (let k = 7; k <= 100; k += 7) {
  if (k % 14 !== 0) {
    result3 += `${k} `;
  }
}
console.log(result3);

console.log(`===========================================`);

// 7777안에 있는 3의 배수 갯수 알아내기

let count = 0;
for (let i = 3; i <= 7777; i += 3) {
  count += 1;
}
console.log(`3의 배수의 총 갯수 : ${count}`);
