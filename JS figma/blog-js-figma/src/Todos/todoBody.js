// import editingTodo from "./events/editingTodos";

// export default function TodoBody() {
//   return (
//     <div>
//       <input value={text} onChange={textChange} />
//       <button onClick={addTodo}> Nemeh</button>

//       {error && <div>Aldaa: {error}</div>}

//       <ul>
//         {todos.map((todo, index) => (
//           <li
//             key={todo.id}
//             style={{ textDecoration: todo.done ? "line-through" : "none" }}
//           >
//             <input
//               type={"checkbox"}
//               onChange={(e) => handleDoneChange(todo.id, e)}
//             />
//             {todo.text}
//             {!todo.done && (
//               <button onClick={() => editingTodo(index)}>zasah</button>
//             )}
//             <button onClick={() => deleteTodo(index)}>ustgah</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
