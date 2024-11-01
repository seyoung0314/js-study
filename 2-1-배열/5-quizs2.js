/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.

- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/

let nameList = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];
let inputName;
let delNameIndex;
console.log(`[${nameList}]`);

while (true) {
  inputName = prompt(`${nameList}\n삭제할 멤버이름을 입력하세요.`);
  // 배열에 입력값이 있는 지 확인
  if (nameList.includes(inputName)) {
    // 있다면 배열의 위치 저장
    delNameIndex = nameList.indexOf(inputName);
    // 배열의 위치에 가서 삭제
    nameList.splice(delNameIndex,1);
    alert(`[${nameList}]`);

    console.log(`[${nameList}]`);
    console.log(`${delNameIndex}`);
  }else{
    alert(`배열에 없는 이름입니다.`);
  }
  if(nameList.length === 0){
    alert(`멤버가 없습니다.`);
    break;
  }
}
