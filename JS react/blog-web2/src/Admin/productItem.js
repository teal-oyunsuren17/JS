import axios from "axios";
import { useState } from "react";

export function ProductItem({ product, onChange }) {
  const [checked, setChecked] = useState(false);
  const [edited, setEdited] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newCategory, setNewCategory] = useState("");

  function saveBtn() {
    axios
      .put(`http://localhost:8080/buteegdehuun/${product.id}`, {
        id: product.id,
        title: newTitle,
        price: newPrice,
        category: newCategory,
      })
      .then((res) => {
        onChange();
      });

    setEdited(!edited);
    setNewCategory("");
  }

  function cancelBtn() {
    setEdited(!edited);
    setNewCategory("");
  }

  function handleDelete() {
    if (window.confirm("Delete?")) {
      axios
        .delete(`http://localhost:8080/buteegdehuun/${product.id}`)
        .then((res) => {
          onChange();
        });
    }
  }

  return (
    <div key={product.id}>
      <div
        style={{
          textDecoration: checked ? "line-through" : "none",
          display: "flex",
          marginBottom: "20px",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <input
          type={"checkbox"}
          onChange={() => setChecked(!checked)}
          checked={checked}
        />
        {edited ? (
          <>
            <div style={{ width: "20%" }}> {product.title}</div>
            <div style={{ width: "10%" }}>{product.price} ₮</div>
            <div style={{ width: "10%" }}>{product.category}</div>
          </>
        ) : (
          <>
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />

            <input
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />

            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </>
        )}
        {!edited ? (
          <>
            <button onClick={cancelBtn}>cancel</button>
            <button onClick={saveBtn}>save</button>
          </>
        ) : (
          <>
            <button onClick={() => setEdited(!edited)}>edit</button>
            <button onClick={handleDelete}>remove</button>
          </>
        )}
      </div>
    </div>
  );
}
