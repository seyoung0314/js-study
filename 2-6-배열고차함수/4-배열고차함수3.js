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

// findIndex() : 해당 조건에 맞는 객체데이터의 인덱스 찾기
// (===)비교가 들어감

const idx1 = [`a`, `b`, `c`].indexOf(`b`);
console.log(`idx1 : ${idx1}`);

function myFindIndex(callbackfn) {
  for (let i = 0; i < userList.length; i++) {
    if (callbackfn(userList[i])) {
      return i;
    }
  }
  return -1;
}

const idx2 = userList.findIndex((user) => user.job === `과일`);
console.log(`idx2 : ${idx2}`);

// 배열에 들어가 있어서 접근하기 번거로움
const arr1 = userList.filter((user) => user.userName === `빠나나`);
console.log(arr1[0].job);

function myFind(callback) {
  const idx = myFindIndex(callback);
  return idx !== -1 ? userList[idx] : null;
}

const myFindArr = myFind((user) => user.userName === `빠나나`);
console.log(myFindArr);

console.log(`==========================================`);

// find() : 배열에서 조건에 일치하는 처음 발견한 객체를 리턴
// 객체로 리턴되서 접근이 용이 (없으면 undefind)
// 중복이 없는 데이터를 조건으로 걸 수 있을 때 사용
const findArr = userList.find((user) => user.userName === `빠나나`);
console.log(findArr.job);

console.log(`==========================================`);

// some() : 배열에서 특정 조건에 맞는 데이터가 하나라도 있는 지
// every() :  배열에서 모든 데이터가 특정 조건에 맞는 지
// 둘 다 boolean형으로 반환

function mySome(callback){
  for(const user of userList){
    if(callback(user)){
      return true;
    }
  }
  return false;
}

function myEvery(callback){
  for(const user of userList){
    if(!callback(user)){
      return false;
    }
  }
  return true;
}
const myFlag1 = mySome((user) => user.salary >= 5000000);
const myFlag2 = myEvery((user) => user.address === `서울`);
console.log(`myFlag1 : ${myFlag1}`);
console.log(`myFlag2 : ${myFlag2}`);

// 급여가 500만원 이상인 회원이 하나라도 있는가?
const flag1 = userList.some((user) => user.salary >= 5000000);
console.log(`flag1 : ${flag1}`);

// 모든 회원들이 서울에 사는 지 확인 
const flag2 = userList.every((user) => user.address === `서울`);
console.log(`flag2 : ${flag2}`);
