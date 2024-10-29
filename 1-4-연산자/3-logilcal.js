// 산술연산 - 피연산자가 숫자여야 함
// 비교연산 - 피연산자가 숫자 or 문자
// 논리연산 - 피연산자가 논리여야 함

let t = true;
let f = false;

// && : 양쪽 항이 모두 true인 경우만 true
// 로그인 로직 : 아이디,pw가 모두 일치
console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);

console.log(`===========================`);

let height = 145;
let age = 6;
console.log(height>=140 && age>=6);

console.log(`===========================`);

// || 둘 중 하나만 true면 true
console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

console.log(`===========================`);

// ! 논리반전
console.log(!t);
console.log(!f);
