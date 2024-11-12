// 전역변수
// 1~100 까지의 랜덤정수 생성
const randomNumber = Math.floor(Math.random() * 100 + 1);

console.log(randomNumber);

const $numbers = document.getElementById("numbers");
const $upIcon = document.getElementById("up");
const $downIcon = document.getElementById("down");
const $finish = document.getElementById("finish");

function initialSet() {
  $numbers.innerHTML = "";
  // 초기 숫자 세팅 1~100
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
}
// 클릭 이벤트
$numbers.addEventListener("click", numberClick);
