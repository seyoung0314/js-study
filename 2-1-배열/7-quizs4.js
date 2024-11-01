let newjeans = ["민지", "해린", "하니", "혜인", "다니엘"];
let inputName;
let selectNum;
let selectName;
let addName;
let delName;
let delNameIndex;

console.log(`${newjeans}`);

while (true) {
  selectNum = prompt(`현재 멤버 : ${newjeans}\n메뉴를 선택하세요.
1. 새로운 이름추가
2. 기존 이름 삭제
3. 프로그램 종료`);

  //새로운 멤버추가
  if (selectNum == 1) {
    while (true) {
      inputName = prompt(`추가할 새로운 멤버의 이름을 입력하세요.`);
      if (!newjeans.includes(inputName)) {
        if (inputName !== "") {
          addName = inputName;
          newjeans.push(addName);
          alert(`${addName}이(가) 추가되었습니다.`);
          break;
        } else {
          alert(`이름을 입력해주세요.`);
        }
      } else {
        alert(`이미 있는 멤버입니다.`);
      }
    }
  }
  //기존멤버 삭제
  else if (selectNum == 2) {
    while (true) {
    inputName = prompt(`삭제할 멤버의 이름을 입력하세요.`);
    // if (!newjeans.includes(inputName) && inputname) { 이라고 해도 괜찮
      if (newjeans.includes(inputName) && inputName !== "") {
        delName = inputName;
        delNameIndex = newjeans.indexOf(delName);
        newjeans.splice(delNameIndex, 1);
        alert(`${delName}이(가) 삭제되었습니다.`);
        break;
      } else {
        alert(`없는 이름입니다.`);
      }
    }
  }
  //프로그램 종료
  else if (selectNum == 3) {
    alert(`종료되었습니다.`);
    break;
  } else {
    alert(`메뉴를 다시 선택하세요.`);
  }
}
