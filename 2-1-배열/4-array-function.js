let foodList = [`닭꼬치`, `햄버거`, `피자`, `볶음밥`];

// indexOf() : 배열의 특정 요소가 몇 번 인덱스에 있는 지 알려줌
//             배열에 요소가 없으면 -1 리턴
console.log(foodList.indexOf(`볶음밥`)); // 3
console.log(foodList.indexOf(`수제비`)); // -1

foodList[foodList.indexOf(`닭꼬치`)] = `김밥`;
console.log(foodList);

console.log(`============================================`);

// includes() : 배열에 특정 요소가 있는 지 유무 확인
//              true/false 리턴
console.log(foodList.includes(`햄버거`)); // true
console.log(foodList.includes(`파스타`)); // false

console.log(`============================================`);

// slice() : 배열을 원하는 만큼 분할해서 배열로 리턴
let numbers = [0, 1, 2, 3, 4, 5, 6];
// 1번 인덱스에서 3번 이전의 인덱스까지 분할
console.log(numbers.slice(1, 3));
// 3번부터 끝까지 분할
let sliceEnd = numbers.slice(3);
console.log(sliceEnd);
// 전체 복제
let sliceCopy = numbers.slice();

console.log(`============================================`);

console.log(foodList);
// 삭제
foodList.splice(1,2);
console.log(foodList);
// 지우고 그 자리에 입력
foodList.splice(0,1,'탕수육');
console.log(foodList);
// (n,0) 이면 n인덱스 앞에 삽입
foodList.splice(1,0,'푸딩');
console.log(foodList);