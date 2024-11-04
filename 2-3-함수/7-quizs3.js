// 2개의 수 중에 작은 수를 리턴
function min2(num1, num2) {
  if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
}

// 3개의 수 중에 작은 수를 리턴
function min3(num1, num2, num3) {
  if (num1 > num2) {
    if (num2 > num3) {
      return num3;
    } else {
      return num2;
    }
  } else {
    if (num1 > num3) {
      return num3;
    } else {
      return num1;
    }
  }
}

// 홀/짝 판별
// 짝수면 true, 홀수면 false 리턴
function isEven(num) {
  // if (num % 2 === 0 ) {
  //   return true;
  // } else {
  //   return false;
  // }  
  return num % 2 === 0
}

//result에는 56이 리턴되어야 함.
let result1 = min2(134, 56);
console.log(`result1: ${result1}`);

// 셋중에 가장 작은 수 50이 result에 저장되어야 함.
let result2 = min3(120, 50, 99);
console.log(`result2: ${result2}`);

// 숫자 1개를 전달하면 해당 숫자가 짝수인지 판별하는 함수
// 24를 전달하면 true리턴, 홀수를 전달하면 false리턴,
// 단, 0은 짝수취급
let result3 = isEven(0);
console.log(`result3: ${result3}`);
