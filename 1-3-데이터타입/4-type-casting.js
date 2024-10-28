let num = 20;
let num2 = 10.0;
let address = "서울시";
let result = "10";

// 타입이 다르면 연산불가
// (js는 다해줌...) => 암묵적 형 변환(implicit type casting)
// 숫자 + 문자 => 문자
console.log(num + num2); // 30
console.log(10 / 4); // 2.5
console.log(num + result); //2010 (string)
console.log(num + address); //20서울시

// 덧셈 제외 산술연산은 문자를 숫자로 변환 시도한 후 
// 변환 성공 => 산술연산 실행 (number)
//      실패 => NaN
console.log(num -result); // 10 (number)
console.log(num -address); // NaN

//명시적 형 변환
const n1 = '10';
const n2 = 20;
const n3 = Number(n1) +n2; //명시적으로 30을 만들고 싶다
console.log(`n3: ${n3}`);
console.log(typeof n1);


let money = 1;
let fruits = '사과';

if(Number(money)){
  console.log(`${fruits}를 살 수 있어요.`);
}
