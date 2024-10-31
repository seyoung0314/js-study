let numFirst;
let numSecond;
let answer;

numFirst = Math.floor(Math.random() * 10 + 1);
numSecond = Math.floor(Math.random() * 10 + 1);

console.log(`${numFirst} + ${numSecond}`);

// 상 : 3자리 / 중 : 2자리 / 하 : 1자리
let level;

while (true) {
  level = +prompt(
    `레벨을 선택해주세요.\n상 : 3\n중 : 2\n하 : 1\n그만하기 : 취소 or 0`
  );
  if (level === 0) {
    alert(`게임을 종료합니다.`);
    break;
  }
  // 문제 수
  let count = 0;

  // 정답, 오답 갯수
  let pass = 0;
  let wrong = 0;
  
  while (true) {
    if (level === 3) {
      numFirst = Math.floor(Math.random() * 900 + 100);
      numSecond = Math.floor(Math.random() * 900 + 100);
    } else if (level === 2) {
      numFirst = Math.floor(Math.random() * 90 + 10);
      numSecond = Math.floor(Math.random() * 90 + 10);
    } else if (level === 1) {
      numFirst = Math.floor(Math.random() * 9 + 1);
      numSecond = Math.floor(Math.random() * 9 + 1);
    } else {
      alert(`다시 선택해주세요.`);
      break;
    }
    // arithmeticRan = 1이면 덧셈, 2면 뺄셈, 3이면 곱셈
    let arithmeticRan = Math.floor(Math.random() * 3 + 1);

    // 뺄셈일 경우
    // 두번째 숫자가 크면 서로 swap
    if (numFirst === numSecond && arithmeticRan === 2) {
      continue;
    }
    if (numSecond > numFirst && arithmeticRan === 2) {
      let content = numFirst;
      numFirst = numSecond;
      numSecond = content;
    }

    let arithmetic; // 연산기호
    // arithmeticRan = 1이면 덧셈, 2면 뺄셈, 3이면 곱셈
    // 문제 정답 저장 (덧셈)

    if (arithmeticRan === 1) {
      arithmetic = `+`;
      answer = numFirst + numSecond;
      console.log(`${numFirst} + ${numSecond} = ${answer}`);
      // 문제 정답 저장 (뺄셈)
    } else if (arithmeticRan === 2) {
      arithmetic = `-`;
      answer = numFirst - numSecond;
      console.log(`${numFirst} - ${numSecond} = ${answer}`);
    } else {
      // 문제 정답 저장 (곱셈)
      arithmetic = `*`;
      answer = numFirst * numSecond;
      console.log(`${numFirst} x ${numSecond} = ${answer}`);
    }
    let userNum = null;

    // 문제 출제 1번부터 시작
    count += 1;
    userNum = +prompt(`Q${count}. ${numFirst} ${arithmetic} ${numSecond} = ?`);

    // 입력값이 0이면 끝나게
    if (userNum === 0) {
      alert(`맞은 문제 수 : ${pass}\n틀린 문제 수 : ${wrong}`);
      console.log(`맞은 문제 수 : ${pass}\n틀린 문제 수 : ${wrong}`);
      break;
    }
    // 정답 오답 확인
    if (userNum === answer) {
      pass++;
      alert(`정답입니다.`);
      console.log(`pass / ${pass}`);
    } else {
      wrong++;
      alert(`오답입니다.`);
      console.log(`wrong / ${wrong}`);
    }
  }
}
