let a = 5;
let b = "5";

console.log(a == b); // js만 true -> 쓰지말자
console.log(a === b); // 이거로 쓰자
console.log(a != b);
console.log(a !== b); // 이거로 쓰자

console.log(`===================================`);

// ==은 직관적인 예측이 어렵
console.log("0" == "");
console.log(0 == "");
console.log("0" == 0);
console.log(false == "false");
console.log(false == 0);

console.log(`===================================`);

console.log("0" === "");
console.log(0 === "");
console.log("0" === 0);
console.log(false === "false");
console.log(false === 0);

console.log(`===================================`);

// 문자 비교
let password ='q1w2e3r4';
console.log(password ==='q1w2e3r4');

// 문자대소비교
console.log('a'>'A'); //아스키코드값 비교 t
console.log('a'<'C');
console.log('가'>'나'); // 한글 유니코드 4만번대
console.log('가'>'나');
console.log('aa'<'bbb');
