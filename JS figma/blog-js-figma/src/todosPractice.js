import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodosPractice() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  function addList() {
    const newTodo = {
      text: text,
      id: uuidv4(),
    };
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    setText("");
  }

  function changeText(e) {
    setText(e.target.value);
  }

  function deleteList(index) {
    console.log(index);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <input value={text} onChange={changeText} />
      <button onClick={addList}>add</button>
      <ul>
        {todos.map((todo, index) => (
          <>
            <li key={todo.id}>
              {todo.text}
              <button>edit</button>
              <button onClick={deleteList(index)}>delete</button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
