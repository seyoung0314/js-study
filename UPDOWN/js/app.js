// 전역변수
// 1~100 까지의 랜덤정수 생성
const randomNumber = Math.floor(Math.random() * 100 + 1);

// 선택된 레벨 변수
let level = null;

// 레벨에 따른 횟수 변수
let count = 0;

console.log(randomNumber);

const $numbers = document.getElementById("numbers");
const $upIcon = document.getElementById("up");
const $downIcon = document.getElementById("down");
const $finish = document.getElementById("finish");
const $levelBtn = document.querySelectorAll(".level-btn");
const $modal = document.getElementById('modalOverlay');
const $modalEnd = document.querySelector('.gameover');
const $count = document.getElementById('count');

// 난이도 선택
function selectedLevel(e){
  level = e.target.dataset.level;
  console.log(`level : ${level}`);
  $modal.style.display = 'none';

  // 난이도 선택에 따른 횟수 저장
  switch(level){
    case 'high' : count = 3; break;
    case 'middle' : count = 5; break;
    case 'low' : count = 10; break;
  }
  
  $count.textContent = count;
  
  console.log(`count : ${count}`);
  
  
}

// 초기 숫자 세팅 1~100
function initialSet() {
  
  // 일단 초기화를 해준다
  $numbers.innerHTML = "";
  
  for (let i = 1; i < 101; i++) {
    const $number = document.createElement("div");
    $number.textContent = i;
    $number.classList.add("icon");
    $number.setAttribute("id", `num${i}`);
    $number.setAttribute("data-index", i);
    $numbers.append($number);
  }
}

initialSet();

// 숫자를 눌렀을 떄
function numberClick(e) {
  const clickedNumberIndex = +e.target.dataset.index;
  
  // 기회가 다 소진됬을 경우
  if(count === 1){
    $count.textContent = 0;
    $upIcon.classList.remove("selected");
    $downIcon.classList.remove("selected");
    $finish.textContent = 'Game Over...';
    $finish.classList.add("show");
    return;
  }
  
  // 15가 정답 18을 고르면 1~18
  // 고른 숫자가 정답 숫자보다 클 때 down
  if (clickedNumberIndex > randomNumber) {
    $downIcon.classList.add("selected");
    $upIcon.classList.remove("selected");
    
    for (let i = clickedNumberIndex + 1; i <= 100; i++) {
      const $number = document.getElementById(`num${i}`);
      if ($number) {
        $number.remove();
      }
    }
    
    // 정답 10 내가 5를 고름 5~100
    // 고른 숫자가 정답 숫자보다 작을 때 up
  } else if (clickedNumberIndex < randomNumber) {
    $upIcon.classList.add("selected");
    $downIcon.classList.remove("selected");
    
    for (let i = 1; i <= clickedNumberIndex; i++) {
      const $number = document.getElementById(`num${i}`);
      console.log($number);
      if ($number) {
        $number.remove();
      }
    }
  } else {
    // 정답일 때
    $upIcon.classList.remove("selected");
    $downIcon.classList.remove("selected");
    $finish.classList.add("show");
  }
  count--;
  $count.textContent = count;
}

// 클릭 이벤트
$numbers.addEventListener("click", numberClick);
$levelBtn.forEach(btn=>{
  btn.addEventListener("click",selectedLevel);
})
