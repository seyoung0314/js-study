let inputList = [];
let input;
let result = 0;
const regex = /^\d+$/;

while(true){
  input = prompt(`숫자를 입력해주세요.`);
  if(input === '그만'){
    break;
    // 받은 값이 숫자인 지 판별
  }else if (regex.test(input)){
    inputList.push(input);
    result += Number(input);
  }else{
    alert(`다시 입력해주세요.`);
  }
}
alert(`${inputList}\n${result}`);