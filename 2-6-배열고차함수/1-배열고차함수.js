const numbers = [1, 2, 3, 4, 5, 6];
const foods = [`제육볶음`, `김치찌개`, `스파게티`, `된장찌개`];

const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
    salary: 5400000,
    age: 35,
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
    salary: 9700000,
    age: 18,
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
    salary: 3900000,
    age: 56,
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
    salary: 7900000,
    age: 42,
  },
];

//굳이굳이 인덱스에 접근하려면 할수는있음
for (const n of numbers) {
  if (numbers.indexOf(n) % 2 === 1) {
    // console.log(n);
  }
}
for (let i = 0; i < numbers.length; i++) {
  if (i % 2 === 1) {
    // console.log(numbers[i]);
  }
}
console.log(`====================================`);

//forEach() : 배열의 반복문 처리
// (method) Array<string>.forEach(callbackfn:
// (value: string, index: number, array: string[])
numbers.forEach(function (n, i, arr) {
  console.log(`n : ${n}`);
  console.log(`i : ${i}`);
  console.log(arr);
});
console.log(`====================================`);

for (const food of foods) {
  // console.log(food);
}

console.log(`====================================`);

foods.forEach((food) => {
  // console.log(food);
});

console.log(`====================================`);

// for (const user of userList) {
//   console.log(user);
//   console.log(`-------------------------------`);
// }

// userList.forEach((user) => {
//   console.log(user);
//   console.log(`-------------------------------`);
// });

console.log(`====================================`);

// filter() : 논리조건에 맞는 데이터를 필터링하며 새 배열로 리턴
// 배열의 크기는 필터링된 만큼
//(method) Array<number>.filter<number>(predicate:
// (value: number, index: number, array: number[])

// const f1 = numbers.filter((n) => {
//   return n % 2 === 0;
// });
const f1 = numbers.filter((n) => n % 2 === 0);
console.log(f1);

const f2 = foods.filter((food) => food.includes(`찌개`));
console.log(f2);

// 회원목록에서 급여가 400만원 이상인 사람들만 필터링
const f3 = userList.filter((user) => {
  console.log(`filter type : ${typeof user}`);
  
  return user.salary >= 4000000;
});
console.log(f3);

//map() : 배열에서 특정 데이터를 추출해서 새로운 배열에 저장
// 배열의 크기가 변하지 않음
const m1 = numbers.map((n) => n ** 2);
console.log(m1);

const m2 = foods.map((food) => food[0]);
console.log(m2);


const m3 = userList.map((user) => {
  console.log(`map type : ${typeof user}`);
  if(user.salary>=4000000){
    return user.userName;
  }
});
console.log(m3);
console.log(`====================================`);

// 회원목록에서 급여가 500만원 이상이면서 나이가 30대인
// 회원의 직업과 급여와 나이만 추출

const newArray = userList
  .filter((user) => user.salary >= 5000000 
  && user.age >= 30 && user.age < 40)
  .map((user) => ({
    name: user.userName,
    job: user.job,
    salary: user.salary,
    age: user.age,
  }));
console.log(newArray);
