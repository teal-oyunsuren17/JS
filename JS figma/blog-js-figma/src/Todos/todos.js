import "../App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodosNew from "./todosNew";
import TodosList from "./todosList";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [editingTexts, setEditingTexts] = useState({});

  function handlesave(text) {
    const newTodo = {
      text: text,
      done: false,
      id: uuidv4(),
    };
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    // setEditing(undefined);
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

  return (
    <div className="todoMain">
      <TodosNew onSave={handlesave} />

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
