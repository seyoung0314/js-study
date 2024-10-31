//1~100 사이의 숫자 중 랜덤으로 숫자 하나를 생성하여
//해당 숫자가 7이 나올 때까지 반복해서 숫자를 생성한다.

//난수생성
/*
  Math.random() - 0 ~ 1사이의 수 생성 0.0 <= n < 1.0
  Math.random() * 100 + 1 - 1 ~ 101사이의 수 생성

  소수점 처리 함수
  Math.ceil - 올림
  Math.floor - 내림
  Math.round - 반올림

  정수 난수 생성 공식(x이상 y이하)
  Math.floor(Math.random()*(y-x+1)) + x);
  */
let ranNum = Math.floor(Math.random() * 10) + 1;
let count = 0;

let num = 0;
while(num!==7){
  num = Math.floor(Math.random() * 10) + 1;
  count++;
}

console.log(`반복문 ${count}번 종료 - num = ${num}`);
