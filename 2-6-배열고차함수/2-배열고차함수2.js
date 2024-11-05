const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

// 숫자 배열에서 홀수번째 데이터만 필터링해서
// 해당 수에 50을 더해서 맵핑

const filteredNums = numbers.filter((number, idx) => {
  if (idx % 2 === 0) {
    return number;
  }
});
console.log(filteredNums);
console.log(`==============================`);

const Mapped = filteredNums.map((number) => number + 50);
console.log(Mapped);

console.log(`==============================`);

let total = 0;
const addFilterMap = numbers
  .filter((n, i) => {
    if (i % 2 === 0) {
      return n;
    }
  })
  .map((n) => n + 50)
  .forEach((n) => total += n);
console.log(total);

console.log(`==============================`);

