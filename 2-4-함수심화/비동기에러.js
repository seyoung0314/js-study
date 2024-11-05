console.log("시작");

function doSomething(callback) {
  setTimeout(function() {
    console.log("비동기 작업 완료");
    callback();
  }, 1000);
}

doSomething(function() {
  console.log("후속 작업 완료");
});

console.log("끝");
