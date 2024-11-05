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

function filter(callback) {
  const arr = [];
  console.log(callback);

  for (const user of userList) {
    callback(user, arr);
  }
  return arr;
}
// 회원목록에서 회원의 직업만 추출해서 새 배열로 리턴
// [추노, 과일, 발렛파킹, 게이머] #1

const filter1 = filter(function (user, arr) {
  return arr.push(user.job);
});

console.log(filter1);
console.log(`===================================`);

// 회원 목록에서 회원의 주소만 추출해서 새 배열로 리턴
// [서울, 서울, 경기, 서울] #2

//값을 저장할 배열
const filter2 = filter((user, arr) => arr.push(user.address));

console.log(filter2);
console.log(`===================================`);

// 회원 목록에서 회원의 두번째 취미만 추출해서 새 배열로 리턴
// [추구, 테니스, 축구, 테니스] #3

const filter3 = filter(function (user, arr) {
  if (user.hobbys[1]) {
    return arr.push(user.hobbys[1]);
  }
});
console.log(filter3);
console.log(`===================================`);

// 이건 푸쉬부분에 넣어본거
function filterPush(callback) {
  const arr = [];
  console.log(callback);

  for (const user of userList) {
    arr.push(callback(user));
  }
  return arr;
}
const filter4 = filterPush((user) => user.job);
console.log(filter4);

// 이름이랑 직업만  [{},{}...]
const filter5 = filterPush((user) => {
  const newObj = {
    userName: user.userName,
    job: user.job,
  };
  return newObj;
});
console.log(filter5);
console.log(`===================================`);

const filter6 = filterPush((user) => ({
  userName: user.userName,
  job: user.job,
}));

console.log(filter6);
console.log(`===================================`);
