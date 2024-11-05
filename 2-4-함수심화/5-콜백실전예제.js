const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
  },
  {
    account: "banana",
    userName: "빠나나왕",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
  },
];

//회원목옥에서 취미가 딱 2개인 사람들만 추출해서
//새 배열에 담아서 반환해주는 함수를 만드세요.

function filterByHas2Hobbies() {
  const filteredArray = [];
  for (const user of userList) {
    if (user.hobbys.length === 2) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}
// const newArray1 = filterByHas2Hobbies();
// console.log(newArray1);

console.log(`======================================`);

// 회원목록에서 서울 사는 사람들만 새 배열을 담아 리턴
// 회원목록에서 (region) 사는 사람들만 새 배열을 담아 리턴
function filterBuUserLiveInRegion(region) {
  const filteredArray = [];
  for (const user of userList) {
    if (user.address === region) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}
// const newArray2 = filterBuUserLiveInRegion(`서울`);
// console.log(newArray2);

console.log(`======================================`);

// 회원목록에서 이름에 `왕`이 포함된 사람
function filterByUserIncludesName(region) {
  const filteredArray = [];
  for (const user of userList) {
    if (user.userName.includes(`왕`)) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}
// const newArray3 = filterByUserIncludesName();
// console.log(newArray3);

console.log(`======================================`);

// 회원가입에서 특정 조건을 만족하는 회원들을 필터링
function filter(condition) {
  const filteredArray = [];
  console.log(condition);
  for (const user of userList) {
    if (condition(user)) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}

// 표현식
const filter1 = filter(function (user) {
  return user.hobbys.length === 4;
});

// 화살표
const filter2 = filter((user) => user.userName.includes(`왕`));

// 선언식
function filter3(user) {
  return user.hobbys.length === 2;
}

console.log(`filter1`);
console.log(filter1);
console.log(`filter2`);
console.log(filter2);
console.log(`filter3`);
console.log(filter(filter3));

console.log(`==============================================`);



