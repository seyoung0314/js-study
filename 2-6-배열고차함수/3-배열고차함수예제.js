const traders = [
  {
    trader: {
      name: "김철수", // traders[0].trader.name
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022, // traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 1500000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 2500000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 500000,
  },
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요

let temp = [];
const arr1 = traders
  .filter((n) => n.year === 2022)
  .map((n) => ({
    name: n.trader.name,
    city: n.trader.city,
  }))
  .filter((n, idx) => {
    temp.push(n.name + n.city);
    if (temp.indexOf(n.name + n.city) === idx) {
      return {
        name: n.name,
        city: n.city,
      };
    }
  });

console.log(`#1`);
console.log(arr1);

console.log(`===========================================`);

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.

const arr2 = traders
  .map((n) => n.trader.city)
  .filter((n, idx, arr) => {
    // 배열의 인덱스가 0일 경우 false처리되니까
    // indexOf는 중복된 요소중 가장 앞에 인덱스를 가져옴
    if (arr.indexOf(n) === idx) {
      return n;
    }
  });
console.log(`#2`);
console.log(arr2);
console.log(`===========================================`);

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
let uniqueName = [];
let uniqueArray = [];
const arr3 = traders
  .filter((n) => n.trader.city === `대전`)
  .map((n) => ({
    name: n.trader.name,
    city: n.trader.city,
  }))
  .forEach((n, idx, arr) => {
    if (idx === 0) {
      uniqueArray.push(n);
      uniqueName.push(n.name);
    } else {
      if (!uniqueName.includes(arr[idx].name)) {
        uniqueArray.push(arr[idx]);
      }
    }
  });
console.log(`#3`);
console.log(uniqueArray);
console.log(`===========================================`);

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.

const arr4 = traders
  .map((n) => n.trader.name)
  .filter((n, idx, arr) => {
    if (arr.indexOf(n) === idx) {
      return n;
    }
  });
console.log(`#4`);
console.log(arr4);
console.log(`===========================================`);

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.

let total = 0;
const arr5 = traders
  .filter((n) => n.trader.city === `서울`)
  .map((n) => n.value)
  .forEach((n) => {
    total += n;
  });
console.log(`#5`);
console.log(total);
