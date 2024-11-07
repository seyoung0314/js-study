// 디스트럭쳐링 (distructuring) : 구조 분해 할당

const userName = [`고구마`, `감자`, `양파`];

// 배열에 들어 있는 데이터를 다시 각각의 변수에 저장하고싶음
// const sweetPotato = userName[0];
// const potato = userName[1];
// const union = userName[2];

const [sweetPotato, potato, union] = userName;

console.log(userName);
console.log(sweetPotato, potato, union);

// [1]제외
const [swp, , uni] = userName;
console.log(swp, uni);
console.log(`========================================`);

const exArr = [[10, 20], () => {}];

// exArr[0][1]
// exArr[1]();

const [numbers, foo] = exArr;
numbers[1];
foo();

let first = 10,
  second = 20;

console.log(`first : ${first}, second : ${second}`);

[first, second] = [second, first];
console.log(`first : ${first}, second : ${second}`);

// 맨 앞 2개의 숫자만 각각의 변수에 저장하고
// 나머지는 다시 배열로 묶어서 보관
const nums = [1, 3, 5, 7, 9, 11];
const numsCopy = nums.slice();
// const one = numsCopy.shift();
// const three = numsCopy.shift();

// 중간값을 배열로 묶고 이런거는 과정 한번으론 안됨
const [one, three, ...unmsOther] = nums;
console.log(`one : ${one}`);
console.log(`three : ${three}`);
console.log(`unmsOther : ${unmsOther}`);

console.log(`===================================`);

const foods = [`햄버거`, `감자튀김`, `콜라`];
const fruits = [`오렌지`, `사과`, `자몽`];

const newFoods = [foods, fruits];
const newFoodsSpread = [...foods, ...fruits, "피자"];
console.log(newFoods);
console.log(newFoodsSpread);

// 배열복사(얕은 복사)
const newFruits = [...fruits];
newFruits[1] = `포도`;
newFruits.pop();
console.log(newFruits);
console.log(fruits);

console.log(`====================================`);
const student = {
  name: `이름`,
  age: 14,
  birthDay: `0314`,
};

const { name: name, age, birthDay: birth } = student;
console.log(student);
console.log(name);
console.log(age);
console.log(birth);

console.log(`====================================`);
const divStyle = {
  "font-size": `16px`,
  "border-radius": `50%`,
};
// 변수명규칙에 안맞기 때문에 바꿔준다.
const { "font-size": fontSize, "border-radius": bddr } = divStyle;

console.log(divStyle["font-size"]);
console.log(fontSize);

console.log(`========================================`);

function myPetInfo({ name, age }) {
  console.log(`이름은 ${name}입니다.`);
  console.log(`나이는 ${age}입니다.`);
}
const dog = {
  name: `초코`,
  age: 3,
  kind: `진돗개`,
  injection: true,
};
const cat = {
  name: `나비`,
  age: 2,
};
myPetInfo(dog);
myPetInfo(cat);

console.log(`================================`);
const { dogKind, dogInjection, ...dogOther } = dog;
console.log(dogOther);


console.log(`================================`);
// cat의 원본은 유지하면서 새 객체에 injection을 추가
// 객체레벨이 2이상이면 깊은 복사를 해줘야함
const copyCat = {
  ...cat,
  injection : false,
};
// copyCat.name = cat.name;
// copyCat.age = cat.age;
// copyCat.injection = false;
console.log(cat);
console.log(copyCat);



