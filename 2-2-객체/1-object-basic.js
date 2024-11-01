//
// 객체
let cats = [
  {
    name: `여름`, // 프로퍼티 (속성) : 프로퍼티 value
    age: 7,
    color: `grey`,
    injection: true,
    favorite: [`츄르`, `레이저`],
  },
];

cats.push({
  name: `삐약`, 
  age: 5,
  color: `brown`,
  injection: true,
  favorite: [`츄르`, `트릿`],
});
console.log(cats[0].age);
console.log(`=============================`);

let myCat = {
  name: `냐옹`,
  age: 1,
  color: `white`,
  injection: true,
  favorite: [`치킨`],
  // 이름을 공백포함해서도 만들 수 있다
  'my- cat':1
};
// 이런식으로 가져옴
console.log(myCat['my- cat']);
console.log(myCat[`color`]);
