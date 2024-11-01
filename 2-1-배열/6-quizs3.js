/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['민지', '해린', '하니', '혜인', '다니엘']을 저장하세요.   
2. 사용자에게 수정할 멤버 이름과 새로운 이름을 입력받고 
  해당 멤버를 수정한 뒤 수정 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 
   다시 수정할 이름을 입력할 수 있도록 하세요.
4. 한 명의 멤버를 정확하게 수정할때까지 프로그램은 계속되어야 합니다.
*/

let newjeans = ["민지", "해린", "하니", "혜인", "다니엘"];
let selectName;
let modiNameIndex;
let modiName;
console.log(`${newjeans}`);

while (true) {
  selectName = prompt(`${newjeans}\n변경 할 이름을 입력하세요.`);
  if (newjeans.includes(selectName) && selectName !== "") {
    modiNameIndex = newjeans.indexOf(selectName);
    modiName = prompt(`${selectName}을 누구로 변경하시겠습니까?`);
    
    if(modiName ===""){
      alert(`이름을 입력해주세요.`);
    }else{
      newjeans.splice(modiNameIndex, 1, modiName);
      alert(`${selectName}은(는) ${modiName}으로 변경되었습니다.`);
    }
  } else {
    alert(`${selectName}은(는) 없는 이름입니다.\n다시 입력해주세요.`);
  }
}
