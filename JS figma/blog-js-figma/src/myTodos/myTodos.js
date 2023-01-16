import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function MyTodos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingText, setEditingText] = useState({});

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

  function changeCheckbox(id) {
    const newTodo = [...todos];
    const index = newTodo.findIndex((todo) => todo.id === id);
    newTodo[index].done = !newTodo[index].done;
    setTodos(newTodo);
  }

  function editTodo(id, index) {
    const newEditingText = { ...editingText };
    newEditingText[id] = todos[index].text;
    setEditingText(newEditingText);
  }

  function removeTodo(id) {
    if (window.confirm("ustgah uu")) {
      const newTodo = [...todos];
      newTodo.splice(id, 1);
      setTodos(newTodo);
    }
  }

  function handleTextEditing(id, e) {
    const newEditingText = { ...editingText };
    newEditingText[id] = e.target.value;
    setEditingText(newEditingText);
  }

  function cancelEditing(id) {
    const newEditingText = { ...editingText };
    newEditingText[id] = undefined;
    setEditingText(newEditingText);
  }

  function saveEditing(id, index) {
    const newTodos = [...todos];
    newTodos[index].text = editingText[id];
    setTodos(newTodos);

    cancelEditing(id);
  }
  return (
    <div className="todoMain">
      <h1>MyTodos</h1>
      <input value={text} onChange={changeInput} />
      <button onClick={addList}>add</button>

      <ul>
        {todos.map((todo, index) => (
          <li
            className="list"
            key={todo.id}
            style={{
              textDecoration: todo.done ? "line-through" : "none",
            }}
          >
            <>
              {editingText[todo.id] !== undefined ? (
                <>
                  <input
                    value={editingText[todo.id]}
                    onChange={(e) => handleTextEditing(todo.id, e)}
                  />
                  <button onClick={() => cancelEditing(todo.id)}>bolih</button>
                  <button onClick={() => saveEditing(todo.id, index)}>
                    hadgalah
                  </button>
                </>
              ) : (
                <>
                  <input
                    type={"checkbox"}
                    onChange={() => changeCheckbox(todo.id)}
                  />
                  {todo.text}
                  <button onClick={() => editTodo(todo.id, index)}>edit</button>
                  <button onClick={() => removeTodo(index)}>remove</button>
                </>
              )}
            </>
          </li>
        ))}
      </ul>
      <p>
        <Link to={"/TodosPractice"}>TodosPractice</Link>
      </p>
      <p>
        <Link to={"/Todos"}>Todos</Link>
      </p>
    </div>
  );
}
