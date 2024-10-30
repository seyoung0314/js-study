// 양의정수를 입력하세요
// 1~  n까지의 2제곱수가 출력

// let inputNum = prompt('양의 정수를 입력하세요.');
let inputNum = 16;
let result = "";

for (let i = 2; i <= inputNum; i *= 2) {
  result += `${i} `;
}
console.log(result);
// alert(result);
