/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
2. bmi지수를 계산하여 반환함과 동시에 
3. bmi가 25.0이상이면 "당신은 과체중입니다." 
  18.5이하면 "당신은 저체중입니다." 
  나머지는 "당신은 정상체중입니다."를 출력하는 
  CalcBMI라는 함수를 정의하고 호출하세요. 
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
# 출력 예시: 
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"

Math.round(5.78999); // 반올림 -> 6
*/

// 안내문을 출력하고 bmi를 리턴

// 함수에는 하나의 기능만 있는 것이 컴팩트하기에
// 안내하는 함수를 따로 정의  => 모듈화
function judgeBmi(bmi){
  if (bmi >= 25) {
    console.log(`당신은 과체중입니다.`);
  } else if (bmi <= 18.5) {
    console.log(`당신은 저체중입니다.`);
  } else {
    console.log(`당신은 정상체중입니다.`);
  }
}

// bmi값을 리턴
function calcBMI(cm, kg) {
  let m = cm * 0.01; // cm를 m로 변환
  let bmi = kg / m ** 2; // bmi 지수 공식
  
  // bmi 판별
  judgeBmi(bmi);

  return bmi;
}


// n을 소수 p자리에서 반올림
function round(n, p) {
  // console.log(n);

  // Math.round는 소수점 전체를 반올림 하기때문에
  // 필요한 자리수 만큼 곱해주고 다시 나누어준다.
  let result = Math.round(n * (10 ** p)) / (10 ** p);

  // .toFixed(p) 는 p자리에서 반올림해주는 함수
  //  값이 문자열로 반환되기 때문에 타입변환을 시켜준다.
  // result = Number(n.toFixed(p));
  return result;
}

let h = 178.4,
  w = 78.2;
let myBmi = calcBMI(h, w);

console.log(
  `키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi, 2)}입니다.`
);
