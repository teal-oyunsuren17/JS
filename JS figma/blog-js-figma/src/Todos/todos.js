import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todos({ message }) {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  function textChange(e) {
    setText(e.target.value);
  }

  function addTodo() {
    if (text === "") {
      setError("Utgaa bichne uu");
    } else {
      const newTodo = {
        text: text,
        done: false,
        id: uuidv4(),
      };
      const newTodos = [newTodo, ...todos];
      setTodos(newTodos);
      setText("");
      setError("");
    }
  }

  function deleteTodo(index) {
    if (window.confirm("ustgah uu")) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  }

  function handleDoneChange(id, e) {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  function editingTodo(index) {
    const newTodos = [...todos];
    const editedText = prompt("Todo zasah", todos[index].text);
    newTodos[index].text = editedText;
    setTodos(newTodos);
  }

  return (
    <div>
      <input value={text} onChange={textChange} />
      <button onClick={addTodo}> Nemeh</button>

      {error && <div>Aldaa: {error}</div>}

      <ul>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            <input
              type={"checkbox"}
              onChange={(e) => handleDoneChange(todo.id, e)}
            />
            {todo.text}
            {!todo.done && (
              <button onClick={() => editingTodo(index)}>zasah</button>
            )}
            <button onClick={() => deleteTodo(index)}>ustgah</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
