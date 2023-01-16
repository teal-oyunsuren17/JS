import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodosPractice() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function addList() {
    const newTodo = {
      text: text,
      id: uuidv4(),
      done: false,
    };
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    setText("");
  }

  function changeText(e) {
    setText(e.target.value);
  }

  function editList() {}

  function deleteList(index) {
    console.log(index);
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  }

  function changeCheckbox(id) {
    const newTodo = [...todos];
    const index = newTodo.findIndex((todo) => todo.id === id);
    newTodo[index].done = !newTodo[index].done;
    setTodos(newTodo);
  }

  return (
    <div>
      <input value={text} onChange={changeText} />
      <button onClick={addList}>add</button>

      {todos.map((todo, index) => (
        <div>
          <li
            key={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            <input type={"checkbox"} onChange={() => changeCheckbox(todo.id)} />
            {todo.text}
            <button onClick={editList}>edit</button>
            <button onClick={() => deleteList(index)}>remove</button>
          </li>
        </div>
      ))}
    </div>
  );
}
