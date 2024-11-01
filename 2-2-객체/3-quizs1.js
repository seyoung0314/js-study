/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다. 
   아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.
    
- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 key가 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.

*/

let userInfo = {
  userList: [
    {
      account: "kim1234",
      password: "kkk1234",
      username: "김두한",
    },
    {
      account: "park9876",
      password: "ppp9999",
      username: "박찬호",
    },
    {
      account: "hong7766",
      password: "hhh1234",
      username: "홍길동",
    },
  ],
};
console.log(userInfo.userList[1].account);

let inputId = `park9876`;
let inputPwd = `ppp9999`;

while (true) {
  inputId = prompt(`아이디을 입력하세요.`);
  let userNum = null;
  // 입력받은 이름가 객체안에 있는 지 확인하여 
  // 있다면 해당객체 번호 저장
  for (let i = 0; i < userInfo.userList.length; i++) {
    if (inputId === userInfo.userList[i].account) {
      userNum = i;
      break;
    }
  }


  // for..of 문
  // 여기서 let user은 객체로 저장됨
  // for (let user of userInfo.userList) {
  //   if (inputId === user.account) {
  //     userNum = userInfo.userList.indexOf(user);
  //   }
  // }

  // 유저 검색이 안됐을경우
  if (userNum === null) {
    alert(`존재하지 않는 회원입니다.`);
    continue;
  }
  
  while (true) {
    inputPwd = prompt(`비밀번호를 입력하세요.`);
    if (inputPwd === userInfo.userList[userNum].password) {
      break;
      //사용자가 취소를 눌렀을 때
    } else if (inputPwd === null) {
      break;
      //사용자가 비밀번호를 틀렸을 때
    } else {
      alert(`비밀번호를 다시 확인해주세요.`);
    }
  }
  if (inputPwd !== null) {
    alert(`${userInfo.userList[userNum].username}님 로그인 성공`);
    break;
  }
}
