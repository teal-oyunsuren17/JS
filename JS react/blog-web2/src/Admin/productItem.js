import { useEffect, useState } from "react";
import AdminHeader from "./adminHeader";
import { AdminModal } from "./adminModal";

export function ProductItem() {
  const [product, setProduct] = useState([]);

  const [checked, setChecked] = useState(false);
  const [edited, setEdited] = useState(true);
  const [newCategory, setNewCategory] = useState("");

  function deleteBtn(id) {
    const updatedProduct = product.filter((l) => l.id !== id);
    setProduct(updatedProduct);
  }

  function saveBtn(index) {
    const updatedItem = product[index];
    updatedItem.category = newCategory;
    const updatedProduct = [...product, updatedItem];
    setProduct(updatedProduct);
    setEdited(!edited);
    setNewCategory("");
  }

  function cancelBtn() {
    setEdited(!edited);
    setNewCategory("");
  }

  useEffect(() => {
    fetch("http://localhost:8080/buteegdehuun")
      .then((req) => req.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <AdminHeader />
      <AdminModal />
      {product.map((p, index) => (
        <div>
          <div
            key={p.id}
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
                <div style={{ width: "20%" }}> {p.title}</div>
                <div style={{ width: "10%" }}>{p.price}</div>
                <div style={{ width: "10%" }}>{p.category}</div>
              </>
            ) : (
              <input
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            )}
            {!edited ? (
              <>
                <button onClick={cancelBtn}>cancel</button>
                <button onClick={() => saveBtn(index)}>save</button>
              </>
            ) : (
              <>
                <button onClick={() => setEdited(!edited)}>edit</button>
                <button onClick={() => deleteBtn(p.id)}>remove</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
