for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
console.log(`반복문 종료`);

// 중첩 반복문에서의 break
console.log(`========================`);

apple: for (let i = 0; i < 3; i++) {
  grape: for (j = 0; j < 2; j++) {
    if (i === j) {
      // j포함된 for문 탈출
      break apple;
    }
    console.log(`${i},${j}`);
  }
  // if(i===1){
  //   break;
  // }
}
