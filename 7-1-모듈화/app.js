//다른 js파일에서 데이터 불러오기
import { $btn, $text } from "./getDom.js";
import { clickHandler } from "./eventHandler.js";
import xxx from "./calculator.js";
import { food } from "./calculator.js";

console.log(xxx.add(1,3));

food.foodName = '아이스크림';
console.log(food.foodName);


$btn.addEventListener("click", clickHandler);
