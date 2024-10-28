// 김철수라는 이름의 변수를 myName에 저장
// let myName = 김철수;

let myName = "김철수";  // java는 이거만됨
console.log(myName);
console.log(typeof myName);

myName = '박영희';
console.log(typeof myName);

// 2015년 이후 자바스크립트 - ES6+
myName = `둘리`; //ES6+ 문법
console.log(typeof myName);

// 이전버전
// let htmlTag = '<ul>\n\t<li>사과</li>\n\t<li>바나나</li>\n</ul>'
let htmlTag =`
<ul>
  <li>사과</li>
  <li>바나나</li>
</ul>`;
console.log(htmlTag);

// x월 x일은 xxx날 입니다.
let month = 12;
let day =25;
let anniversary = '크리스마스';

// 이전버전
// let sentence = month + '월 ' + day + '일은 ' + anniversary + '입니다.';
let sentence = `${month}월 ${day}는 ${anniversary}입니다.`;
console.log(sentence);
