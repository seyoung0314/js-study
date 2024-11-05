//
// 블록 스코프 : 블록 안에서 선언한 변수는 블록 안에서만 사용
for (let i = 0; i < 3; i++) {
  console.log(`i : ${i}`);
}

console.log(`============================================`);


// 전역 스코프 : 프로그램 전체에서 사용가능
let i;
for (i = 0; i < 3; i++) {}
console.log(`outer i : ${i}`);

let n = `hello`;
if (true) {
  let n = 10;
  if(true){
    let n =20;
    console.log(`inner n : ${n}`);    // n = 20
  }
  console.log(`outer n : ${n}`);      // n = 10
}
console.log(`outermost n : ${n}`);      // n = 10

console.log(`============================================`);

// 지역 스코프 : 함수 내에서 변수가 생성되고 소멸
function func(){
  let x = `이름`;
  console.log(`local : ${x}`);
  return x;
}
let y = func();
console.log(`global : ${y}`);

console.log(`============================================`);

// 전역 스코프는 사용자제
// 1. 변수 이름의 충돌문제
// 2. 프로그램 종료까지 남아있어 리소스 낭비
// 3. 스코프체인이 너무 김