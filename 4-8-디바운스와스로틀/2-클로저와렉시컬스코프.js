//클로저를 통해 지역변수의 수명을 늘려줄 수 있다

function increaseClosure(){
  let count = 0;
  function increaseCount(){
    return count++; 
  }
  return increaseCount;
}

//취미의 갯수를 세야 함
const increaseHobbyCount = increaseClosure();
console.log(`취미갯수`);
console.log(increaseHobbyCount());
console.log(increaseHobbyCount());
console.log(increaseHobbyCount());

//사람 수를 세야 함
const increaseHumanCount = increaseClosure();
console.log(`사람수`);

console.log(increaseHumanCount());
console.log(increaseHumanCount());
console.log(increaseHumanCount());
console.log(increaseHumanCount());

