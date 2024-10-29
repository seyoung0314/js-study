let userName = prompt("당신의 이름은 무엇인가요?");
let userAge = +prompt("당신의 나이는 몇살인가요?");

// 출생연도
let currentYear = new Date().getFullYear(); //현재연도
let birthYear = 2024 - userAge + 1;
alert(`${userName}님은 ${birthYear}년생이군요.`);
