// 배열 데이터 정렬하기
const nums = [6, 11, 3, 7, 9, 10, 27, 2, 100, 4, 1];
console.log(nums);

// sort는 양수일 때 a,b의 자리가 바뀜
// 버블정렬처럼 보이지만 아님..!!!! 

// 오름차순 정렬
nums.sort((a, b) => a - b);
console.log(nums);

// 내림차순 정렬
nums.sort((a, b) => b - a);
console.log(nums);

//문자 정렬
const foods = [`짜장면`, `짬뽕`, `가지튀김`, `호빵`, `닭강정`];
console.log(foods);

// 오름차순
foods.sort((a, b) => {
  // 문자열은 연산해서 숫자가 안나오니까 직접 설정해줘야함
  if (a > b) return 1;
  else if (a < b) return -1;
  else return;
});
console.log(foods);

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
    salary: 1900000,
    age: 42,
  },
];

// 나이가 적은 순
userList.sort((a, b) => a.age - b.age);

// 급여가 높은 순
userList.sort((a, b) => b.salary - a.salary);

// 이름 가나다 순
userList.sort((a, b) => {
  if (a.userName > b.userName) return 1;
  else if (a < b) return -1;
  else return;
});
conso;
le.log(userList);
