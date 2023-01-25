import { useState } from "react";

export function AdminItem({ product, index, list, setList }) {
  const [checked, setChecked] = useState(false);
  const [edited, setEdited] = useState(true);
  const [newCategory, setNewCategory] = useState("");

  function deleteBtn(id) {
    const updatedList = list.filter((l) => l.id !== id);
    setList(updatedList);
  }

  function saveBtn() {
    const updatedItem = list[index];
    updatedItem.title = newCategory;
    const updatedList = list;
    updatedList[index] = updatedItem;
    setList(updatedList);
    setEdited(!edited);
    setNewCategory("");
  }

  function cancelBtn() {
    setEdited(!edited);
    setNewCategory("");
  }
  return (
    <div
      key={product.id}
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
          <div style={{ width: "10%" }}> {product.title}</div>
        </>
      ) : (
        <input
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
      )}
      <div style={{ width: "10%" }}>
        ene angilald hichneen baraa baigaag bichih heseg
      </div>
      {!edited ? (
        <>
          <button onClick={cancelBtn}>cancel</button>
          <button onClick={saveBtn}>save</button>
        </>
      ) : (
        <>
          <button onClick={() => setEdited(!edited)}>edit</button>
          <button onClick={() => deleteBtn(product.id)}>remove</button>
        </>
      )}
    </div>
  );
}
