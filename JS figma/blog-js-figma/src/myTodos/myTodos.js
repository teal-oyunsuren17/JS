import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function MyTodos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingText, setEditingText] = useState({});

  function changeText(e) {
    setText(e.target.value);
  }

  function addTodos() {
    const newTodo = {
      id: uuidv4(),
      text: text,
      done: false,
    };
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    setText("");
  }

  function changeCheckbox(id) {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  function deleteTodo(index) {
    if (window.confirm(`ustgah uu "${todos[index].text}"`)) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  }

  function editTodo(id, index) {
    const newEditingText = { ...editingText };
    newEditingText[id] = todos[index].text;
    setEditingText(newEditingText);
  }

  function handleChangeText(id, e) {
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
      <div>
        <input value={text} onChange={changeText} />
        <button onClick={addTodos}>add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <>
            <li
              key={todo.id}
              className="list"
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              {editingText[todo.id] === undefined ? (
                <>
                  <input
                    type={"checkbox"}
                    onChange={() => changeCheckbox(todo.id)}
                    checked={todo.done}
                  />
                  {todo.text}
                  {!todo.done && (
                    <button onClick={(e) => editTodo(todo.id, index)}>
                      edit
                    </button>
                  )}

                  <button onClick={() => deleteTodo(index)}>delete</button>
                </>
              ) : (
                <>
                  <input
                    value={editingText[todo.id]}
                    onChange={(e) => handleChangeText(todo.id, e)}
                  />
                  <button onClick={() => cancelEditing(todo.id)}>cancel</button>
                  <button onClick={() => saveEditing(todo.id, index)}>
                    save
                  </button>
                </>
              )}
            </li>
          </>
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
