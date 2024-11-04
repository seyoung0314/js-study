// return은 함수를 강제종료하는 구문
// break와 같게 사용할 수 있음

function add() {
  let a = 10;
  let b = 20;
  return a + b;
  console.log(`hello`);
}

function callYourName(name) {
  let prohibits = [`바보`, `멍청이`];
  if (prohibits.includes(name)) {
    console.log(`올바른 이름이 아닙니다.`);
    return;
  }
  console.log(`${name}님 안녕하세요.`);
}

callYourName(`뽀로로`);
callYourName(`바보`);

console.log(`=====================================`);

function loop(n) {
  while (true) {
    if (n === 0) {
      console.log("break!");
      break; // 반복문 탈출
    } else if (n === 1) {
      console.log(`RETURN`);
      return; // 함수 탈출
    }
  } // end while
  console.log(`end while`);
} // end functon

console.log(`<break>`);
loop(0);
console.log(`=====================================`);
console.log(`<return>`);
loop(1);

console.log(`=====================================`);
console.log(`배열로 저장`);

// return은 언제나 하나의 값만 반환!
// => 여러개의 값을 반환하고 싶으면 배열이나 객체사용

// 사칙연산의 값을 반환하는 함수
function operate(n1, n2) {
  let addResult = n1 + n2;
  let subResult = n1 - n2;
  let multiResult = n1 * n2;
  let divResult = n1 / n2;

  let resultList = [addResult, subResult, multiResult, divResult];
  return resultList;
}

let result = operate(10, 5);
console.log(`덧셈 : ${result[0]}`);
console.log(`뺄셈 : ${result[1]}`);
console.log(`곱셈 : ${result[2]}`);
console.log(`나눗셈 : ${result[3]}`);

console.log(`=====================================`);
console.log(`객체로 저장`);

// function operateObj(n1, n2) {
//   let addResult = n1 + n2;
//   let subResult = n1 - n2;
//   let multiResult = n1 * n2;
//   let divResult = n1 / n2;

//   let resultObj = {
//     addResult: addResult,
//     subResult: subResult,
//     multiResult: multiResult,
//     divResult: divResult,
//   };
//   return resultObj;
// }


// 함수 간소화~
function operateObj(n1, n2) {
  return {
    // 다른 함수를 가져다쓸 수 있음 => 리팩토링
    addResult: add(n1,n2),
    subResult: n1 - n2,
    multiResult: n1 * n2,
    divResult: n1 / n2,
  };
}

let resultObj = operateObj(10, 5);
console.log(`덧셈 : ${resultObj.addResult}`);
console.log(`뺄셈 : ${resultObj.subResult}`);
console.log(`곱셈 : ${resultObj.multiResult}`);
console.log(`나눗셈 : ${resultObj.divResult}`);

