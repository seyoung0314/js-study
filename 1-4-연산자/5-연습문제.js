let x = 10;
let y = 3;

console.log(x + y); //13
console.log(x - y); //7
console.log(x * y); //30
console.log(x % y); //1

console.log(`=========================================`);

let num1 = "100";
let num2 = 100;

console.log(num1 == num2); //t
console.log(num1 === num2); //f
console.log(num1 != num2); //f
console.log(num1 !== num2); //t

console.log(`=========================================`);

let a = 5;
let b = 10;

let result = a > 3 && b < 15; //t
let result2 = a === 5 || b === 20; //t
let result3 = !(a < b); //f

console.log(result);
console.log(result2);
console.log(result3);
