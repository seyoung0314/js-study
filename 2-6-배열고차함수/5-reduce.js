const numbers = [10, 20, 30, 40, 50];

// reduce() : 배열의 각 요소들을 콜백에 맞게 합산, 누적하여
//            단 하나의 결과값을 반환
/* reduce(accumulator, currentValue)
   1. accumulator : 어떤 데이터를 계속 누적해 나가는 변수
          처음엔 [0]으로 시작해서 그 다음부턴 반환값사용
   2. currentValue : 현재 루프회차에서 사용할 데이터

   -> 반복 실행을 할 때마다 acc에 cur를 return 조건에 맞게 누적
   -> 마지막 acc의 값을 반환
*/
const c = numbers.reduce((a, b) => {
  console.log(`a : ${a}`);
  console.log(`b : ${b}`);
  console.log(`========================`);
  return a + b; // 반환된 값이 다음 acc의 값
}, 0);
console.log(`c : ${c}`);

/*
.reduce(callback,initialValue)
=> 두번째 파라미터는 초기값(숫자, 문자열, 배열, 객체, 불린 값)
*/
console.log(`========================================`);
const appleBasket = [
  {
    color: "green",
    sweet: 13,
  },
  {
    color: "red",
    sweet: 14,
  },
  {
    color: "red",
    sweet: 11,
  },
  {
    color: "green",
    sweet: 6,
  },
  {
    color: "green",
    sweet: 7,
  },
  {
    color: "green",
    sweet: 9,
  },
];

// 객체배열의 경우 처음 acc의 값이 객체이기때문에
// 초기값을 0으로 지정해줘야 제대로 합산이 나옴
// 사과 바구나에 있는 모든 사과들의 당도를 합산

// let totalSweet = appleBasket.reduce((acc, cur) => {
//   console.log(`acc : `,acc);
//   console.log(`cur : `,cur);
//   return acc + cur.sweet;
// },0);

let totalSweet = appleBasket.reduce((acc, cur) => acc + cur.sweet, 0);
console.log(`totalSweet : ${totalSweet}`);

/*
색별로 사과 카운트
결과 예시 : {'red' : n, 'green' : m}
*/

const resultObj = {};
for (const apple of appleBasket) {
  const color = apple.color;
  // in : 해당 키가 객체 안에 있는지 확인
  if (color in resultObj) {
    resultObj[color]++;
  } else {
    // 객체에 동적추가 했을 때 변수명을 키로 쓰고싶으면
    // []로 묶어줌 (원래는 obj.keyName)
    resultObj[color] = 1;
  }
}
console.log(resultObj);

console.log(`==================================`);

function myReduce(callback, initialValue) {
  let acc = initialValue !== undefined ? initialValue : appleBasket[0];
  let startIdx = initialValue !== undefined ? 0 : 1;
  for (let i = startIdx; i < appleBasket.length; i++) {
    let cur = appleBasket[i];
    acc = callback(acc, cur);
  }
  return acc;
}

const total = myReduce((sweetTotal,apple)=>sweetTotal+apple.sweet,0);
console.log(`total : `,total);

const counter = appleBasket.reduce((countObj, apple) => {
  console.log(`countObj : `, countObj);
  console.log(`apple : `, apple);
  if (apple.color in countObj) {
    countObj[apple.color]++;
  } else {
    countObj[apple.color] = 1;
  }
  return countObj;
}, {});
console.log(`counter : `, counter);
