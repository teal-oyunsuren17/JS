import { useState } from "react";

export function AdminItem({ product, list, setList }) {
  const [checked, setChecked] = useState(false);

  function deleteBtn(id) {
    const updatedList = list.filter((l) => l.id !== id);
    setList(updatedList);
  }

  function editBtn(id) {}
  return (
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
      <div>
        <img src={product.thumbnail} alt="new" style={{ width: "100px" }} />
      </div>
      <div>{product.title}</div>
      <div>{product.price}$</div>
      <div>{product.category}</div>
      <div>{product.brand}</div>
      <button onClick={() => editBtn(product.id)}>edit</button>
      <button onClick={() => deleteBtn(product.id)}>remove</button>
    </div>
  );
}
