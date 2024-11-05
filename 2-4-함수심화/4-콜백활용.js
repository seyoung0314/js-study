function makeCook(recipeName,recipeFunction) {
  console.log(`###요리 레시피###`);
  console.log(`!!! 요리 이름 : ${recipeName}`);

  // 레시피
  // 함수를 사용하는 사람이 원하는 커스텀 코드
  recipeFunction();

  console.log(`요리 완성`);
  console.log(`===========================================`);
}

makeCook(`김치볶음밥`,function(){
  console.log(`김볶밥 레시피`);
  console.log(`김치 밥`);
});
makeCook(`샌드위치`,function(){
  console.log(`야채 빵`);
  console.log(`빵 굽기`);
});

