// ============상수변수 영역=================
const ADD = "+";
const SUB = "-";
const MUL = "x";
const DIV = "/";

// ============전역변수 영역=================
let currentResult = 0; // 연산이 누적될 변수
const logArray = []; // 로그들을 저장할 변수

//============ DOM 가져오기==================
const [$addBtn, $subBtn, $mulBtn, $divBtn] = [
  ...document.getElementById("calc-actions").children,
];
const $calculator = document.getElementById("calculator");

// 입력태그 가져오기
const $inputNumber = document.getElementById("input-number");

// result 영역 가져오기
const $currentResult = document.getElementById("current-result");

// 현재 계산 로그 영역 가져오기
const $calcLog = document.getElementById("current-calculation");

// 로그 목록 태그 가져오기
const $logEntries = document.querySelector(".log-entries");

// =============함수 정의=====================

// 계산 기능 정의
function calculator(type) {
  // 1. 입력창에 입력한 숫자를 읽어오기
  //value값은 문자열로 넘어와서 숫자로 변경해준다
  const userInput = +$inputNumber.value;

  // 갱신 전 누적값 백업
  const prevResult = currentResult;

  // 2. 기존 결과에 누적
  currentResult = operateNumber({
    type: type,
    first: currentResult,
    second: userInput,
  });

  // 3. 화면에 누적 결과 랜더링
  $currentResult.textContent = currentResult;

  // 4. 계산 로그 생성
  const descriptionLog = `${prevResult} ${type} ${userInput}`;

  // 5. 계산 로그 화면에 랜더링
  $calcLog.textContent = descriptionLog;

  // 6. 로그들을 배열에 쌓기

  const logMessage = `${descriptionLog} = ${currentResult}`;
  logArray.unshift(logMessage);

  // 7. 로그를 로그목록에 최신 로그 4개만 랜더링
    log(logArray);


  // 8. 로그의 갯수가 4개가 되면 전체보기 버튼 생성
  const $showAllBox = document.querySelector("showAllBox");

  if ($showAllBox.children.length && logArray.length >= 4) {
    const $showAllBth = document.createElement("button");
    $showAllBth.textContent = "전체 로그 보기";
    $showAllBth.append($showAllBth);

    $showAllBth.addEventListener("click", (e) => {
      $logEntries.innerHTML = "";
      logArray.forEach((log) => {
        const $newLi = document.createElement("li");
        $newLi.textContent = log;
        $newLi.classList.add("log-entries__item");

        $logEntries.prepend($newLi);
      });
    });
  }
}

function log(logArray) {
  // 배열의 길이가 4개 이상일 경우, 최대 4개까지만 출력
  const maxItems = Math.min(logArray.length, 4);
  console.log(maxItems);

  $logEntries.innerHTML = "";
  for (let i = maxItems-1 ; i > -1; i--) {
    if (logArray[i]) {
      const $newLi = document.createElement("li");
      $newLi.textContent = logArray[i];
      $newLi.classList.add("log-entries__item");

      $logEntries.prepend($newLi);
    }
  }
}

// 사칙연산 분기 처리
// @param1 - type : 어떤 연산을 진행하는 지
function operateNumber({ type, first, second }) {
  let result;
  switch (type) {
    case ADD:
      result = first + second;
      break;
    case SUB:
      result = first - second;
      break;
    case MUL:
      result = first * second;
      break;
    case DIV:
      result = Math.floor(first / second);
      break;
  }
  return result;
}

// =============이벤트 등록===================
$addBtn.addEventListener("click", (e) => {
  calculator(ADD);
});
$subBtn.addEventListener("click", (e) => {
  calculator(SUB);
});
$mulBtn.addEventListener("click", (e) => {
  calculator(MUL);
});
$divBtn.addEventListener("click", (e) => {
  calculator(DIV);
});
