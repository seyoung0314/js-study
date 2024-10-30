// 정수입력받고 약수띄우고 약수의 갯수띄우기

let inputNum = +prompt('정수를 입력하세요.');
// let inputNum = 30;
let result = "";
let count = 0;

for (let i = 1; i <= inputNum; i++) {
  if (inputNum % i === 0) {
    result += `${i}\n`;
    count++;
  }
}
result += `약수의 갯수 : ${count}개`
alert(result);
console.log(i);
console.log(count);
