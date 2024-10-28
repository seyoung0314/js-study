
// 1. 이름 중복선언 가능 (->let 사용권고)
var apple = 10;
var apple = 20;
console.log(apple);

// 2. 블록레벨 스코프 지원x -블록 안에서만 임시사용 불가
var varNum = 10;
if (true){
  varNum = 20;
  console.log('if안의 varNum: ',varNum);
}
console.log('if밖의 varNum: ',varNum);

let letNum = 10;
if (true){
  let letNum = 20;
  console.log('if안의 letNum: ',letNum);
}
console.log('if밖의 letNum: ',letNum);

// 3. hoistig : 변수선언을 자동으로 위로 끌어올림
console.log(ironman);
var ironman = 'tony';  // 출력이 되버림..

// console.log(ironman);
// let ironman = 'tony';  /ㅇ/ 에러메세지 출력