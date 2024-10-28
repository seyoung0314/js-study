// 변수 (variable) : 변경 가능한 데이터
// 상수 (constant) : 변경 불가한 데이터

let letTaxRate = 0.2;

let letMyMoney = 10000;
console.log('당신의 세후 소득은: ',letMyMoney - (letMyMoney*letTaxRate));

const CON_TAX_RATE = 0.2; // 상수 표기는 대문자와 _로 선언
// CON_TAX_RATE = 0.4; // 에러메세지 출력

let conMyMoney = 10000;
console.log('당신의 세후 소득은: ',conMyMoney - (conMyMoney*CON_TAX_RATE));