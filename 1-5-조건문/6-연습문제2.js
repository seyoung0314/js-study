//정수 a,b,c라는 프롬포트를 띄워 각각 값을받고 
// 최소인 수를 알럿창을 띄움

let numA = +prompt(`정수 A의 값을 입력하세요.`) 
let numB = +prompt(`정수 B의 값을 입력하세요.`) 
let numC = +prompt(`정수 C의 값을 입력하세요.`) 

let minNum;
let minNumName;
if(numA>numB){
  if(numB>numC){
    minNum = numC
    minNumName = 'C'
  }else{
    minNum = numB
    minNumName = 'B'
  }
}else{
  if(numA>numC){
    minNumName = 'B'
  }  
  minNum = numA
  minNumName = 'A'
}
alert(`최솟값은 정수 ${minNumName}인 ${minNum}입니다.`)