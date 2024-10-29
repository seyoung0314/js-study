// js는 나눗셈을 수행할 떄 신수 나눗셈을 수행 (소수점 o)
// 다른언어들은 27.0/5.0 실수타입
console.log(27 / 5); //5.4

// 몫만 구하기
console.log(Math.floor(27 / 5)); //5

// 나머지 연산
console.log(27 % 5); //2
// 뒤의 숫자가 더 클 경우 => 몫 : 0 , 나머지 : 앞의 수
console.log(5 % 27); //5
console.log(10 % 0); //NaN

// 제곱연산(ES6+)
console.log(2 ** 4); //16

console.log("===================================");

// 증감 연산자
let x = 3;
x++; //4
++x; //5
x--; //4
--x; //3
console.log(`x: ${x}`);

// 전위 연산, 후위 연산
let n1 = 10;
let n2 = n1++;
console.log(`n1: ${n1},n2: ${n2}`); // n1: 11,n2: 10

let m1 = 10;
let m2 = ++m1;
console.log(`m1: ${m1},m2: ${m2}`); // m1: 11,m2: 11

let myNum = 5;
myNum += 3; // myNum = myNum + 3; //8
myNum -= 6; // myNum = myNum - 6; //2
myNum *= 5; //10
myNum %= 4; //2
myNum **= 3; //8
console.log(`myNum: ${myNum}`);

let xx = 3;
// xx += 1;
// xx++; //속도가 이게 더 빠름