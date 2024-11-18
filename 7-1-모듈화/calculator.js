const add = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;

//변수 내보내기 - 변수는 무조건 const로 내보내짐
let foodName = '햄버거';

//변경해야 할 변수는 객체로 내보내기
const food = {
  foodName : foodName,
}

export {food};
//내보낼 데이터가 단 하나면 export default
export default {
  add:add,
  sub:sub,
};
