let temperature = 35;

if (temperature > 30) {
  console.log('날씨가 덥습니다.');
} else {
  console.log('날씨가 덥지 않습니다.');
}
//날씨가 덥습니다.

console.log(`====================================`);

let age = 16;

if (age >= 20) {
  console.log('성인');
} else if (age >= 13) {
  console.log('청소년');
} else {
  console.log('어린이');
}
//청소년

console.log(`====================================`);

let score = 55;
let grade;

// if (score >= 90) {
//   grade = 'A';
// } else if (score >= 80) {
//   grade = 'B';
// } else if (score >= 70) {
//   grade = 'C';
// } else {
//   grade = 'D';
// }

grade = (score >= 90) ? grade='A'
      : (score >= 80) ? grade='B'
      : (score >= 70) ? grade='C'
      : grade='D'
console.log(grade); 

