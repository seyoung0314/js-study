// 
let petList = [`고양이`,`강아지`,`햄`,];
console.log(petList);

console.log(`========================================`);
``
console.log(`======================================\==`);

// push() 배열 맨 뒤에 데이터 추가
petList.push(`거북이`);
petList.push(`사자`,`앵무`);
console.log(petList);
console.log(petList.length);

// pop() 배열 맨 뒤에 데이터 뽑기
petList.pop();
petList.pop();
petList.pop();
console.log(petList);

let x = petList.pop();
console.log(x);


// shift() 배열의 맨 첫 데이터 삭제
console.log(petList);
// unshilft() 배열의 맨 첫 데이터 추가
petList.unshift('문어','');