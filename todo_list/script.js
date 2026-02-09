const input = document.getElementById("input");
const btn = document.getElementById("addBtn");
const list = document.getElementById("list");

let todos = [
    {
        id : 1,
        todo: 'Walking'
    },
];

function addTodo() {
    let inputText = input.value;

    if (inputText == "") {
        alert("Please enter a todo");
        return;
    }

    todos.push({
        id : todos.length + 1,
        todo: inputText
    }
    );
    input.value = "";

    show();
}

function show() {
    list.innerHTML = ""

    for (let i = 0; i < todos.length; i++) {
        list.innerHTML += todos[i].id + " . " + todos[i].todo+ "<br>";
    }
}

show();
