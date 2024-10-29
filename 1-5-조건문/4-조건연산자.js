//
// 상황에 따라 가독성 좋게 결정해서 사용

//돈이 3000원이상 있으면 김밥을 먹을 수 있다.
//돈이 3000원미만이면 굶어야 한다.

let money = 4000;
let food;
// let food = (money>=3000) ? '김밥' : '굶어..';

// if (money >= 5000) {
//   food = "떡라면";
// } else if (money >= 3000) {
//   food = "김밥";
// } else {
//   food = "굶어..";
// }

food = money >= 5000 ? "떡라면" : money >= 3000 ? "김밥" : "굶어";

console.log(`선택된 음식: ${food}`);

//시험합격 여부

let score = 70;
// let isPass = score >= 60 ? true : false;
let isPass = (score >= 60);
console.log(`합격여부: ${isPass}`);
