export default function TodosNew({ text, textChange, addTodo, handleKeyUp }) {
  return (
    <>
      <div className="inputAndBtn">
        <input
          value={text}
          onChange={textChange}
          onKeyUp={handleKeyUp}
          placeholder="Enter your todo list"
        />
        <button onClick={addTodo}>+</button>
      </div>
    </>
  );
}
