import { useState } from "react";

export default function TodosPractice() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [key, setKey] = useState(987654);

  function changeInput(e) {
    setText(e.target.value);
  }

  function addList() {
    const newTodo = {
      text: text,
      id: 78,
      done: false,
    };
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    setText("");
    setKey(key + 1);
    console.log(key);
  }

  return (
    <div>
      <input value={text} onChange={changeInput} />
      <button onClick={addList}>add</button>
      <ul>
        {todos.map((todo) => (
          <li key={key}></li>
        ))}
      </ul>
    </div>
  );
}
