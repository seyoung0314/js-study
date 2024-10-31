//
let numbers = [10, 20, 30, 40, 50];

console.log(`numbers : ${numbers[1]}`); // 20
console.log(`typeof  : ${typeof numbers}`); // object
console.log(`typeof  : ${typeof numbers[0]}`); // number

console.log(numbers[1] ** 2);

numbers[0] = 999; // 배열의 요소(element) 수정
console.log(numbers);
numbers[2]++;
console.log(numbers[2]); // 31

// 배열의 총 요소(데이터) 수
console.log(numbers.length); // 5

// 배열의 마지막 요소 접근
console.log(numbers[numbers.length - 1]); // 50

console.log(`======================================`);

// 배열의 순회 : 전체 데이터를 순차적으로 접근
for (let i = 0; i < numbers.length; i++) {
  console.log(`${i + 1}번째 데이터 : ${numbers[i]}`);
}

console.log(`======================================`);

// 배열의 순회 전용 반복문
let weekDays = [`월`, `화`, `수`, `목`, `금`, `토`, `일`];

//for ~ of 
let count = 0;
for (let day of weekDays) {
  console.log(`day : ${day}요일`);
  count++;
  console.log(`count : ${count}`);
}

console.log(`${weekDays}`);
console.log(`======================================`);

for (let i = 0; i < weekDays.length; i++) {
  console.log(`${weekDays[i]}요일`);
}

// 배열 변수 이름 관례 : 복수형, ~list 어미
let hobbies = [];
let hobbyList = []

