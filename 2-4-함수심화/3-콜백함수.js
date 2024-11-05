// 일급 함수(java, c는 지원안함)
// java나 c에선 다른 개념을 사용하여 만듬
// 함수를 마치 하나의 값처럼 사용하여
// 변수에 저장하거나 다른 함수에 전달, 리턴할 수 있음

function substract(n1, n2) {
  return n1 - n2;
}
let orange = substract;
console.log(orange);
console.log(typeof orange); //function

const grape = orange(30, 12);
console.log(`grape : ${grape}`);

console.log(`=========================================`);

function printSubstract(x) {
  const result = x(10, 4);
  console.log(`result : ${result}`);
  console.log(typeof x);
}

printSubstract(substract);
printSubstract(function (n1, n2) {
  return n1 * n2;
});
// 이렇게 변경가능
printSubstract((n1, n2) => n1 * n2);

console.log(`=========================================`);
// 함수가 함수를 리턴
function bar(n1, n2) {
  return function () {
    return n1 + n2;
  };
}
//
// const bar = (n1, n2) => () => n1 + n2;

const temp = bar(1, 2);
console.log(typeof temp); // function

const rtTemp = temp();
console.log(`rtTemp : ${rtTemp}`);
