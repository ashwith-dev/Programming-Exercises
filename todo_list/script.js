const input = document.getElementById("input");
const btn = document.getElementById("addBtn");
const list = document.getElementById("list");

let todos = [];

function addTodo() {
    let inputText = input.value;

    if (inputText == "") {
        alert("Please enter a todo");
        return;
    }

    todos.push(inputText);
    input.value = "";

    show();
}

function show() {
    list.innerHTML = ""

    for (let i = 0; i < todos.length; i++) {
        list.innerHTML += (i + 1) + ". " + todos[i]+ "<br>";
    }
}


