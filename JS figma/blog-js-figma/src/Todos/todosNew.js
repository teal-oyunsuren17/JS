import { useState } from "react";
import TodosError from "./todosError";

export default function TodosNew({ onSave }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  // const [editing, setEditing] = useState();

  function handlesave() {
    if (text === "") {
      setError("Utgaa bichne uu");
    } else {
      onSave(text);
      setText("");
      setError("");
    }
  }

  function textChange(e) {
    setText(e.target.value);
  }

  function handleKeyUp(e) {
    if (e.code === "Enter") {
      handlesave();
    }
  }
  return (
    <>
      <div className="inputAndBtn">
        <input
          value={text}
          onChange={textChange}
          onKeyUp={handleKeyUp}
          placeholder="Enter your todo list"
        />
        <button onClick={handlesave}>+</button>
      </div>
      <TodosError error={error} />
    </>
  );
}
