import { useState } from "react";

export function ProductItem({ product, index, products, setProducts }) {
  const [checked, setChecked] = useState(false);
  const [edited, setEdited] = useState(true);
  const [newCategory, setNewCategory] = useState("");

  function deleteBtn(id) {
    const updatedProduct = products.filter((l) => l.id !== id);
    setProducts(updatedProduct);
  }

  function saveBtn(index) {
    const updatedItem = products[index];
    updatedItem.category = newCategory;
    const updatedProduct = products;
    updatedProduct[index] = updatedItem;
    setProducts(updatedProduct);
    setEdited(!edited);
    setNewCategory("");
  }

  function cancelBtn() {
    setEdited(!edited);
    setNewCategory("");
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
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            123
          </>
        )}
        {!edited ? (
          <>
            <button onClick={cancelBtn}>cancel</button>
            <button onClick={() => saveBtn(index)}>save</button>
          </>
        ) : (
          <>
            <button onClick={() => setEdited(!edited)}>edit</button>
            <button onClick={() => deleteBtn(product.id)}>remove</button>
          </>
        )}
      </div>
    </div>
  );
}
