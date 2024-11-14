const $timeInput = document.getElementById('timeInput');
const $startBtn = document.getElementById('startButton');

let min;
$startBtn.addEventListener('click',(e)=>{
  min = +$timeInput.value;
});