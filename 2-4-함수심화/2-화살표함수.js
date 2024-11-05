// 함수 선언문 방식
function add1(n1, n2) {
  return n1 + n2;
}
// 함수 표현식 방식
const add2 = function (n1, n2) {
  return n1 + n2;
};

//===============================================

// 화살표 함수 방식 (ES6+) -> 얘도 익명함수임
const add3 = (n1, n2) => {
  return n1 + n2;
};
// 함수의 코드가 한줄이면 아래처럼 생략가능
const add4 = (n1, n2) => n1 + n2;
const r4 = add4(1, 3);
console.log(r4);

console.log(`==============================`);

// 매개변수가 1개라면 괄호 생략가능 (0개면 써줘야함)
const sayHello = name => console.log(`${name}님 hello`);
sayHello(`화살표`);


