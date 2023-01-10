import "../App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState();
  const [editingTexts, setEditingTexts] = useState({});

  function textChange(e) {
    setText(e.target.value);
  }

  function addTodo() {
    if (text === "") {
      setError("Utgaa bichne uu");
    } else {
      if (editing === undefined) {
        const newTodo = {
          text: text,
          done: false,
          id: uuidv4(),
        };
        const newTodos = [newTodo, ...todos];
        setTodos(newTodos);
      } else {
        const newTodos = [...todos];
        newTodos[editing].text = text;
        setTodos(newTodos);
        setEditing(undefined);
      }
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

  function handleDoneChange(id) {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  function editingTodo(id, index) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = todos[index].text;
    setEditingTexts(newEditingTexts);
  }

  function handleEditingText(id, e) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = e.target.value;
    setEditingTexts(newEditingTexts);
  }

  function updateEditing(index, id) {
    const newTodos = { ...todos };
    newTodos[index].text = editingTexts[id];
    setTodos(newTodos);

    cancelEditing(id);
  }

  function cancelEditing(id) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = undefined;
    setEditingTexts(newEditingTexts);
  }

  return (
    <div className="todoMain">
      <input value={text} onChange={textChange} />
      <button onClick={addTodo}> Nemeh</button>

      {error && <div>Aldaa: {error}</div>}
      <ul>
        {todos.map((todo, index) => {
          return (
            <li
              className="list"
              key={todo.id}
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              {editingTexts[todo.id] !== undefined ? (
                <>
                  <input
                    value={editingTexts[todo.id]}
                    onChange={(e) => handleEditingText(todo.id, e)}
                  />
                  <button onClick={() => updateEditing(index, todo.id)}>
                    hadgalah
                  </button>
                  <button onClick={() => cancelEditing(todo.id)}>bolih</button>
                </>
              ) : (
                <>
                  <input
                    type={"checkbox"}
                    onChange={(e) => handleDoneChange(todo.id, e)}
                  />
                  {todo.text}
                  {!todo.done && (
                    <button onClick={() => editingTodo(todo.id, index)}>
                      zasah
                    </button>
                  )}
                  <button onClick={() => deleteTodo(index)}>ustgah</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
