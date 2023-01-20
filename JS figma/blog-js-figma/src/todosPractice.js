import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// import { useToast } from "@chakra-ui/react";

export default function TodosPractice() {
  // const toast = useToast();
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [editingText, setEditingText] = useState({});

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
    // toast({
    //   title: "Account created.",
    //   description: "We've created your account for you.",
    //   status: "success",
    //   duration: 9000,
    //   isClosable: true,
    // });
  }

  function editList(id, index) {
    const newEditText = { ...editingText };
    newEditText[id] = todos[index].text;
    setEditingText(newEditText);
  }

  function cancelEdit(id) {
    const newEditText = { ...editingText };
    newEditText[id] = undefined;
    setEditingText(newEditText);
  }

  function saveEdit(id, index) {
    const newTodos = [...todos];
    newTodos[index].text = editingText[id];
    setTodos(newTodos);

    cancelEdit(id);
    console.log("hello");
  }

  function editText(id, e) {
    const newEditText = { ...editingText };
    newEditText[id] = e.target.value;
    setEditingText(newEditText);
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
            {editingText[todo.id] === undefined ? (
              <>
                <input
                  type={"checkbox"}
                  checked={todo.done}
                  onChange={() => changeCheckbox(todo.id)}
                />
                {todo.text}
                {!todo.done && (
                  <button onClick={() => editList(todo.id, index)}>edit</button>
                )}
                <button onClick={() => deleteList(index)}>remove</button>
              </>
            ) : (
              <>
                <input
                  value={editingText[todo.id]}
                  onChange={(e) => editText(todo.id, e)}
                />
                <button onClick={() => cancelEdit(todo.id)}>bolih</button>
                <button onClick={() => saveEdit(todo.id, index)}>
                  hadgalah
                </button>
              </>
            )}
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
