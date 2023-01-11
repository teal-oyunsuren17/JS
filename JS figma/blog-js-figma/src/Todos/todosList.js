export default function TodosList({
  todos,
  editingTexts,
  handleEditingText,
  updateEditing,
  cancelEditing,
  handleDoneChange,
  editingTodo,
  deleteTodo,
}) {
  return (
    <>
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
                  <button onClick={() => cancelEditing(todo.id)}>bolih</button>
                  <button onClick={() => updateEditing(index, todo.id)}>
                    hadgalah
                  </button>
                </>
              ) : (
                <>
                  <div className="Lists">
                    <input
                      type={"checkbox"}
                      onChange={(e) => handleDoneChange(todo.id, e)}
                    />
                    {todo.text}
                    {!todo.done && (
                      <button
                        className="editBtn"
                        onClick={() => editingTodo(todo.id, index)}
                      >
                        zasah
                      </button>
                    )}
                    <button
                      className="removeBtn"
                      onClick={() => deleteTodo(index)}
                    >
                      ustgah
                    </button>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
