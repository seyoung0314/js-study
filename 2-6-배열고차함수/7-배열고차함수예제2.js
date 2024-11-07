const traders = [
  {
    trader: {
      name: "김철수", // traders[0].trader.name
      city: "대전",
    },
    year: 2023, // traders[0].year
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
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2023,
    value: 120000,
  },
];

// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**

// const total1 = traders.reduce((total, value) => {
//   return total + value.value;
// }, 0);

const total1 = traders
  .filter((n) => n.trader.city === `대전` && n.year === 2023)
  .reduce((total, sallay) => total + sallay.value, 0);

console.log(`#1`);
console.log(total1);
console.log(`========================================`);

// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**

const arr2 = traders
  .filter((n) => n.trader.city === `부산`)
  .map((n) => n.trader.name);

console.log(`#2`);
console.log(arr2);
console.log(`========================================`);

// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의
//   거래자 정보(이름, 도시)와 거래액을 출력해주세요.**

// 이렇게하면 얕은 복사가 되서 위치만 복사되기때문에
// tradersQ3값이 변경되면 traders도 변경됨. 
// sort()는 참조는 변하게하지않고 인덱스만 변하게하는거라 괜찮
// const tradersQ3 = traders;

const tradersQ3 = traders.slice();
const arr3 = tradersQ3
  .sort((a, b) => b.value - a.value)
  .map((n) => ({
    name: n.trader.name,
    city: n.trader.city,
    value: n.value,
  }))[0];

console.log(`#3`);
console.log(arr3);
console.log(`========================================`);

// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
//   예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**

// const arr4 = traders.reduce((a, b) => {
//   // if (a[b.trader.city] !== undefined) {
//     if(b.trader.city in a){
//     a[b.trader.city] += b.value;
//   } else {
//     a[b.trader.city] = b.value;
//   }
//   return a;
// }, {});

const arr4 = traders.reduce((a, b) => {
  const city = b.trader.city;
  a[city] = (a[city] || 0) + b.value;
  return a;
}, {});

console.log(`#4`);
console.log(arr4);
console.log(`========================================`);

// 5. **거래액이 700000원 이상인 거래를 모두 찾아,
//   해당 거래의 연도별로 분류해주세요. 결과는
//   `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**

// 깊은복사
const tradersQ5 = JSON.parse(JSON.stringify(traders));

const arr5 = tradersQ5
  .filter((tradeInfo) => tradeInfo.value >= 700000)
  .reduce((yearObj, tradeInfo) => {
    if (tradeInfo.year in yearObj) {
      yearObj[tradeInfo.year].push(tradeInfo);
    } else {
      yearObj[tradeInfo.year] = [tradeInfo];
    }
    return yearObj;
  }, {});

// year속성 삭제
// for..in은 키값(객체)과 인덱스(배열) 순회
// for..of는 배열순회
for (const key in arr5) {
  for (const obj of arr5[key]) {
    delete obj.year;
  }
}

console.log(`#5`);
// console.log(arr5);
console.log(JSON.stringify(arr5,null,2));
console.log(`========================================`);

// 6. **각 거래자별로 그들이 진행한 거래의
//   평균 거래액을 계산해주세요.
//   결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**

const count = {}; // 각 사원의 거래횟수를 저장
const arr6 = traders.reduce((avgObj, tradeInfo) => {
  if (tradeInfo.trader.name in avgObj) {
    avgObj[tradeInfo.trader.name] += tradeInfo.value;
    count[tradeInfo.trader.name]++;
  } else {
    // avgObjavgObj[tradeInfo.trader.name] = {sum :tradeInfo.value, count :1};
    // 이런식으로 전개할수도 ~ 
    avgObj[tradeInfo.trader.name] = tradeInfo.value;
    count[tradeInfo.trader.name] = 1;
  }
  return avgObj;
}, {});
// console.log(`count : `);
// console.log(count);

// 평균을 내줌
for (const key in arr6) {
  arr6[key] = arr6[key] / count[key];
}

console.log(`#6`);
console.log(arr6);
console.log(`========================================`);

// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의
//   이름과 그 거래 횟수를 출력해주세요.**

// {2022 : [김철수,3]}
const arr7 = traders.reduce((a, b) => {

  if (b.year in a) {
    a[b.year].push(b.trader.name);
  } else {
    a[b.year] = [b.trader.name];
  }
  return a;
}, {});

const countArr7 = {};

for (const year in arr7) {
  const count = {};
  arr7[year].forEach((name) => {
    count[name] = (count[name] || 0) + 1;
    // if(name in count){
    //   count[name]++;
    // }else{
    //   count[name] = 1;
    // }
  });
  countArr7[year] = count;
}

console.log(`#7`);
console.log(countArr7);
console.log(`========================================`);

// 8. **모든 거래액의 중간값을 출력해주세요.**

const midValue8 = traders
  .reduce((a, b) => {
    a.push(b.value);
    return a;
  }, [])
  .sort((a, b) => b - a);

const result8 =
  (midValue8[midValue8.length / 2] + midValue8[midValue8.length / 2 - 1]) / 2;
// const midValue8 = traders
//   .map((n) => ({
//     value: n.value,
//   }))
//   .sort((a, b) => b.value - a.value);

// const result8 =
//   (midValue8[midValue8.length / 2].value +
//     midValue8[midValue8.length / 2 - 1].value) /
//   2;

console.log(`#8`);
console.log(result8);
console.log(`========================================`);

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요.
//   결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

const arr9 = traders.reduce((a, b) => {
  a[b.trader.city] = (a[b.trader.city] || 0) + 1;

  // if (b.trader.city in a) {
  //   a[b.trader.city]++;
  // } else {
  //   a[b.trader.city] = 1;
  // }
  return a;
}, {});

console.log(`#9`);
console.log(arr9);
console.log(`========================================`);

// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후,
//   정렬된 리스트를 출력해주세요.
//   각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**

const arr10 = traders.sort((a, b) => b.value - a.value);

console.log(`#10`);
console.log(arr10);
console.log(`========================================`);
