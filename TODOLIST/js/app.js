// 서버와 통신할 데이터
const todos = [
  {
    id: 1,
    text: "장보기",
    done: true,
  },
  {
    id: 2,
    text: "점심 메뉴 정하기",
    done: false,
  },
  {
    id: 3,
    text: "게임하기",
    done: true,
  },
];

const $inputText = document.getElementById("todo-text");
const $removeBtn = document.getElementById("remove");
const $todoList = document.querySelector(".todo-list");
const $insertForm = document.querySelector(".todo-insert");

addTodo();

// 리스트 데이터 뿌려주기
function addTodo() {
  $todoList.innerHTML = "";

  todos.forEach((todo) => {
    addList(todo);
  });

  $inputText.value = "";
}

// li 태그 추가 영역
function addList({ text, id, done }) {
  $newListItem = document.createElement("li");
  $newListItem.classList.add("todo-list-item");
  $newListItem.setAttribute("data-id", id);
  $newListItem.innerHTML = `
  <label class="checkbox">
    <input type="checkbox" class="checkbox-input" />
    <span class="text">${text}</span>
  </label>
  <div class="modify">
    <span class="lnr lnr-undo"></span>
  </div>
  <div class="remove">
    <span class="lnr lnr-cross-circle"></span>
  </div>
`;
  const $checkbox = $newListItem.querySelector("input[type=checkbox]");
  $checkbox.checked = done;

  if (done) {
    $checkbox.parentElement.classList.add("checked");
  }

  $todoList.appendChild($newListItem);
}

// input에 입력한 내용 todos 데이터배열에 넣고 리스트에 뿌림
function insertListItem(e) {
  e.preventDefault();

  const inputText = $inputText.value;
  if (inputText === "") {
    return;
  }
  const id = String(Math.random());
  todos.push({
    id: id,
    text: inputText,
    done: false,
  });
  $inputText.value = "";
  console.log(todos);
  addTodo();
}

// 체크박스 선택 시
function selectedItem(e) {
  console.log(e.target.classList);

  if (e.target.closest(".remove") || e.target.closest(".modify")) {
    return;
  }
  if (e.target.matches(".modify-input")) {
    return;
  }

  const selectedId = e.target.closest(".todo-list-item").dataset.id;
  console.log(e.target.closest(".todo-list-item").dataset.id);
  todos.forEach((todo) => {
    if (String(todo.id) === selectedId) {
      todo.done = !todo.done;
    }
    console.log(todos);
    addTodo();
  });
}

// 리스트 내용 삭제버튼 클릭 시
function removeItem(e) {
  if (!e.target.closest(".remove")) {
    return;
  }
  const selectedId = e.target.closest(".todo-list-item").dataset.id;
  todos.forEach((todo, index) => {
    if (String(todo.id) === selectedId) {
      todos.splice(index, 1);
    }
    console.log(`remove`, todos);
    addTodo();
  });
}

let modifyFlag;
// 리스트 내용 수정버튼
function modifyList(e) {
  e.stopPropagation();

  if (!e.target.matches(".lnr-undo")) {
    return;
  }
    if (modifyFlag) {
      addTodo();
      modifyFlag = false;
      return;
    }
    console.log(`modi target`,e.target);

    modifyFlag = true;
    const $label = e.target
      .closest(".todo-list-item")
      .querySelector(".checkbox");
    const $span = $label.querySelector(".text");
    const oldText = $span.textContent;

    console.log(`oldText : ${oldText}`);

    const $newInput = document.createElement("input");
    $newInput.value = oldText;
    $newInput.classList.add("modify-input");
    $newInput.classList.add("text");

    $label.replaceChild($newInput, $span);
    

}

function changeModicon(e){
  
  if(e.target.matches(".lnr-undo")){
    console.log(`1111`);
    e.target.classList.replace('lnr-undo','lnr-checkmark-circle');

    modifyList(e);
  }else if(modifyFlag){
    console.log(`1111111111`);
    e.target.classList.replace('lnr-checkmark-circle','lnr-undo');
    modifyFlag = false;
    modifyList(e);
  }
}

// 리스트 내용 수정
function modifyItem(e) {
  let newTodo;
  let target;
  if ((e.key === "Enter" && e.target.matches(".modify-input"))) {
    newTodo = e.target.value; 
    target = e.target;
  }
  if(e.target.matches(".lnr-cross-circle")){
    newTodo = e.target.closest(".todo-list-item").querySelector('.checkbox span');
    target = e.target;
 }
    const modifiedId = e.target.closest(".todo-list-item").dataset.id;
    todos.forEach((todo) => {
      if (String(todo.id) === modifiedId) {
        todo.text = newTodo;
        changeModicon(target)
      }
      modifyFlag = false;
      
      addTodo();
    });
}

$insertForm.addEventListener("submit", insertListItem);
$todoList.addEventListener("click", selectedItem);
$todoList.addEventListener("click", removeItem);
$todoList.addEventListener("click", modifyList);
$todoList.addEventListener("click", changeModicon);
$todoList.addEventListener("keydown", modifyItem);
