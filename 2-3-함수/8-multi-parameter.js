//
// 두 수를 전달받아 해당 수의 합을 전달
function add(n1, n2) {
  return n1 + n2;
}

function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}

let r1 = add(5, 4);
let r2 = add(1, 2, 3);

// n개의 정수를 전달하면 그 합을 반환
function addAll(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
let r3 = addAll([10, 20, 30]);
console.log(r3);

console.log(`=====================================`);

// JS ES6+
// 자동으로 배열로 전달
function addAllES6(...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}
console.log(addAllES6(5, 6, 7));


console.log(`=====================================`);


// js는 매개변수의 타입형식을 지정하지 못함
// ...(나머지 매개변수)를 사용하려면 인자 마지막에 넣어야함
// number1, ...txt , number2 -> x
function test(number1, number2, ...text) {
  let add = number1 + number2;
  let result = add + text;
  return result;
}
console.log(test(1, 2, `가나다`, `abc`, `123`));

console.log(`=====================================`);

// n개의 정수중 최소값을 구해서 반환하는 함수
function min(...n) {
  result = n[0];
  for (numberMin of n) {
    if (result > numberMin) {
      result = numberMin;
    }
  }
  return result;
}
 
let result4 = min(9, 76 - 90, -1000, 555, 780, -777);
console.log(result4);
