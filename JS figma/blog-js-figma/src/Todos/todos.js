import "../App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodosNew from "./todosNew";
import TodosError from "./todosError";
import TodosList from "./todosList";

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
    const newTodos = [...todos];
    newTodos[index].text = editingTexts[id];
    setTodos(newTodos);

    cancelEditing(id);
  }

  function cancelEditing(id) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = undefined;
    setEditingTexts(newEditingTexts);
  }

  function handleKeyUp(e) {
    if (e.code === "Enter") {
      addTodo();
    }
  }

  return (
    <div className="todoMain">
      <TodosNew
        text={text}
        textChange={textChange}
        addTodo={addTodo}
        handleKeyUp={handleKeyUp}
      />

      <TodosError error={error} />

      <TodosList
        todos={todos}
        editingTexts={editingTexts}
        handleEditingText={handleEditingText}
        updateEditing={updateEditing}
        cancelEditing={cancelEditing}
        handleDoneChange={handleDoneChange}
        editingTodo={editingTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
