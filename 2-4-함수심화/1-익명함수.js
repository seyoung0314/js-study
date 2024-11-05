// 익명함수 (anonymous) : 이름을 지정하지 않은 함수
// 다른 함수에 함수를 전달하거나
// 고차함수(함수의 리턴값이 함수)에서 사용

// 함수 표현식
// (호스팅 되지 않음)
const multiply = function (n, m) {
  console.log(`multiply`);
  return n * m;
};
multiply(2, 3);

// 함수 선언식 (-> 이게 일반적인 이름이 있는 함수)
// 선언식은 호출이 선언 상단에 있어도 작동함
// (함수선언부가 호스팅되서 먼저 작동됨)
add(1,3);
const add = function (n, m) {
  console.log(`add`);

  return n + m;
};
console.log(typeof add); // function

const r1 = add(10, 20); // 변수명으로도 호출가능
console.log(`r1 : ${r1}`);

console.log(`========================================`);
const arr = [
  10,
  `hello`,
  true,
  [1, 2, 3],
  { age: 3, name: `철수` },
  // 배열안의 함수에 이름을 정의할 수 있으나 굳이 안씀
  function () {
    console.log(`배열안의 함수`);
  },
];
console.log(arr.length); // 6
console.log(arr[3][1]);
console.log(arr[4]['name']);
arr[5]();

console.log(`========================================`);

const cat = {
  name : `야옹이`,
  age : 4,
  // 객체안의 함수에도 이름을 정의할 수 있는데 굳이 안씀
  // 속성명을 사용함
  // 매서드 : 객체안에 넣은 함수
  sleep : function(){
    console.log(`zzz`);
  }
}

arr.sleep();

// js에서는 배열도 객체에 포함되는 개념임(다른언어는 xx)
// 그래서 배열에도 속성값을 줄 수 있음(길이에는 포함 x)