const input = document.getElementById("input");
const add = document.getElementById("addBtn");
const list = document.getElementById("list");


let todo_list = [
    {
        id: 1,
        todo: 'Walking'
    },
];

function add_todo() {
    let new_todo = input.value;
    
    if(new_todo == ""){
        alert('You Input Box Is Input,Please Write Something To Add');
    }
 
    todo_list.push({
        id: todo_list.length + 1,
        todo: new_todo
    });

    input.innerHTML = "";
    showTodo();

}

function showTodo(){
    list.innerHTML = "";
    for ( i = 0; i<todo_list.length; i++ ){
        list.innerHTML += todo_list[i].id + '. ' + todo_list[i].todo + '<br>' ;
    };

}

showTodo();
