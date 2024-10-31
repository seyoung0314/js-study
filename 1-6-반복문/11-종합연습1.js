let userNum;
let ranNum;

while (true) {
  ranNum = Math.floor(Math.random() * 100 + 1);

  let start = 1;
  let end = 100;
  let count;
  let level;

  //난이도 설정
  level = prompt(
    `난이도를 설정해주세요.
    1 : 3회 2 : 5회 3 : 10회`
  );
  if (level === '0') {
    break;
  } else if (level === '1') {
    count = 3;
  } else if (level === '2') {
    count = 5;
  } else if (level === '3') {
    count = 10;
  } else {
    alert(`잘못입력하셨습니다.`);
    continue;
  }
  while (true) {
    if (count === 0) {
      alert(`기회를 다 썼어요..`);
      break;
    }
    // 랜덤 숫자 생성 1 ~ 100
    userNum = +prompt(
      `기회 : ${count}\n${start} ~ ${end}\n숫자를 입력하세요. ${ranNum}`
    );

    console.log(`${ranNum}`);


    if (userNum === ranNum) {
      alert(`정답`);
      console.log(`정답`);
      break;
    } else if (userNum > ranNum) {
      end = userNum;
      alert(`down!`);
      // alert(`${start}~${userNum}`);
      console.log(`down!`);
      console.log(`${start}~${userNum}`);
    } else {
      start = userNum;
      alert(`up!`);
      // alert(`${userNum}~${end}`);
      console.log(`up!`);
      console.log(`${userNum}~${end}`);
    }
    count--;
  }
}
