import { useState } from "react";
import { CategoriesEdit } from "./CategoriesEdit";

export function Categories() {
  const [editing, setEditing] = useState(false);

  function closeModal() {
    setEditing(false);
  }

  return (
    <div>
      <div className="d-flex justify-content-between m-4">
        <h1>Angilal</h1>
        <button onClick={() => setEditing(true)}>Shine</button>
      </div>

      <CategoriesEdit show={editing} onClose={closeModal} />
    </div>
  );
}
