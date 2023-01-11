import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function MyTodos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function changeInput(e) {
    setText(e.target.value);
  }

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

  function changeCheckbox(e) {
    // console.log(e.target.);
  }

  return (
    <div>
      <input value={text} onChange={changeInput} />
      <button onClick={addList}>add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type={"checkbox"} onChange={changeCheckbox} />
            {todo.text}
            <button>edit</button>
            <button>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
