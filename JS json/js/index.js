let todoEl = document.getElementById("todos");

fetch("https://dummyjson.com/todos")
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
    })
    .then((todos) => {
        for (let i = 0; i < todos.todos.length; i++) {
            const singleTodo = document.createElement('li');
            singleTodo.innerHTML = todos.todos[i].todo;
            todoEl.append(singleTodo);
        }
    })