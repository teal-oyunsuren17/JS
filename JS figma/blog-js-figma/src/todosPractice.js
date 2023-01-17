import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "@chakra-ui/react";

export default function TodosPractice() {
  const toast = useToast();
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [editText, setEditText] = useState({});

  function changeText(e) {
    setText(e.target.value);
  }

  function deleteList(index1) {
    if (window.confirm(`ustgah uu "${todos[index1].text}"`)) {
      const newTodo = [...todos];
      newTodo.splice(index1, 1);
      setTodos(newTodo);
    }
  }

  function changeCheckbox(id) {
    const newTodo = [...todos];
    const index = newTodo.findIndex((todo) => todo.id === id);
    newTodo[index].done = !newTodo[index].done;
    setTodos(newTodo);
  }

  function addList() {
    if (text === "") {
      setError("Utgaa oruulna uu");
    } else {
      const newTodo = {
        text: text,
        id: uuidv4(),
        done: false,
      };
      const newTodos = [newTodo, ...todos];
      setTodos(newTodos);
      setText("");
      setError("");
    }
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }

  function editList() {}

  function cancelEdit() {}

  function saveEdit() {}

  function editingText(id, e) {
    const newEditText = { ...editText };
    newEditText[id] = e.target.value;
    setEditText(newEditText);
    console.log(newEditText);
  }

  return (
    <div className="todoMain">
      <h1>TodosPractice</h1>
      <input value={text} onChange={changeText} />
      <button onClick={addList}>add</button>

      {error && <div style={{ borderColor: "red" }}> Aldaa : {error}</div>}

      {todos.map((todo, index) => (
        <div>
          <li
            className="list"
            key={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            <input
              type={"checkbox"}
              checked={todo.done}
              onChange={() => changeCheckbox(todo.id)}
            />
            {todo.text}
            {!todo.done && <button onClick={editList}>edit</button>}
            <button onClick={() => deleteList(index)}>remove</button>

            <input value={editText} onChange={(e) => editingText(todo.id, e)} />
            <button onClick={cancelEdit}>bolih</button>
            <button onClick={saveEdit}>hadgalah</button>
          </li>
        </div>
      ))}

      <p>
        <Link to={"/MyTodos"}>MyTodos</Link>
      </p>
      <p>
        <Link to={"/Todos"}>Todos</Link>
      </p>
    </div>
  );
}
