// 동기 : 코드가 순차적으로 실행
// 비동기 : 코드가 순서없이 실행

// setTimeout : 비동기타이머- 코드를 비동기로 동시에 실행시킴

console.log(`오늘 할 일은?`);

setTimeout(()=>{

  console.log(`오늘은 비동기ㅜ.ㅜ`);

},3000);


// setTimeout(() => {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(`hello${i}`);
//     }, 100);
//   }
// }, 0);

// setTimeout(() => {
//   for (let i = 0; i < 4; i++) {
//     setTimeout(() => {
//       console.log(`bye${i}`);
//     }, 100);
//   }
// }, 0);
