//
// return(반환값) :  한수가 생성한 결과를 함수밖으로 가져감

function add(n1, n2) {
  let result = n1 + n2;
  console.log(`n1 : ${n1}, n2 : ${n2}`);
  // console.log(`result : ${result}`);
  return result;
}

// return이 있는 함수는 함수 실행 후의 결과를 다른 변수에 저장 가능
let r1 = add(2, 4); // return = 6
let r2 = add(5, 2); // return = 7

console.log(r1 ** 2);

console.log(add(1, 3));

console.log(`========================================`);
function multiply(n1, n2) {
  console.log(`${n1} x ${n2} = ${n1 * n2}`);
}
// return 값이 없기 때문에 undefined로 저장
// => 변수에 담으면 x (js이외의 언어에선 저장도 안됨)

// multiply(3,2)이 실행은 되지만 결과값을 저장할 순 없음
// => return이 없는 함수는 변수저장 x, 매개값 사용 x
let r3 = multiply(3, 2);
console.log(`r3 : ${r3}`);

console.log(`========================================`);

let r4 = add(add(4, 6), add(5, 15)) * add(3, add(1, 2));

console.log(`========================================`);

multiply(add(1, 2), add(5, 4));

console.log(`========================================`);

multiply(add(1, 2), multiply(5, 4));

console.log(`========================================`);

let arr = [1,2,3,4];
let xx = arr.push(5,6,7,8); // 배열의 길이를 저장
console.log(`xx : ${xx}`); // 8
