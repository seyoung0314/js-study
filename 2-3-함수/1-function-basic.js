console.log(`김철수님 안녕하세요!`);
console.log(`오늘도 즐거운 하루되세요!`);

// 함수 : 코드의 모듈화, 재사용성을 높히기위해 일반화하는 것
function sayHello(name) {
  console.log(`${name}님 안녕하세요!`);
  console.log(`오늘도 즐거운 하루되세요!`);
}

function makeLine() {
  console.log(`=================================`);
}

makeLine();
sayHello(`김철수`);

makeLine();
sayHello(`커피`);