true && true; // true
true && false; // false
false && true; // false
false && false; // false

true || true; // true
true || false; // true
false || true; // true
false || false; // false

// 단축평가 (short circuit)
// 좌항에서 결과가 판명될 경우 우항을 의도적으로 무시
// truthy, falsy 상황에서도 적용

// && : 양쪽 항이 논리가 아닌 경우
//      첫번째 falsy 반환

console.log(true && null); // null
console.log(0 && null); // 0
console.log("hello" && null); // null
console.log("hello" && 5); // 5

// || : 첫번째 truthy를 반환 

console.log(true || null); // true
console.log(0 || null); // null
console.log(undefined || 0); // 0
console.log("hello" || null); // hello
