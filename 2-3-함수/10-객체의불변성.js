
// js의 변수는 가급적 const로 선언
// 필요한 부분만 let으로 변경
// 일단 const로 선언하고 바꿔야하면 그때 let으로 변경

let dog = {
  name : `해피`,
  kind : `말티즈`,
  age : 3
};

// 프로퍼티 값 변경
dog.age = 4;

// 객체를 재할당하면 포인터주소가 변한다고 생각하면댐
dog = {};
console.log(dog);
