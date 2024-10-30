// 경우의 수가 딱 떨어졌을 경우에 사용

let day = "Monday";

switch (day) {
  case "Monday":
  case "월요일":
    console.log(`새로운 한 주가 시작되었습니다.`);
    break;
  case "화요일":
    console.log(`오늘도 좋은 하루 보내세요.`);
    break;
  case "수요일":
    console.log(`주중의 절반을 넘었네요.`);
    break;
  case "목요일":
    break;
    console.log(`주말이 다가오네요.`);
  case "금요일":
    break;
    console.log(`마지막 하루, 잘 마무리하세요.`);
  default:
    console.log(`즐거운 주말 보내세요.`);
}
