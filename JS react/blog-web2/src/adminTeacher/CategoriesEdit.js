import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function CategoriesEdit({ show, onClose }) {
  const [text, setText] = useState("");
  const [lists, setLists] = useState([]);
  const [id, setId] = useState(1);
  const [editing, setEditing] = useState(undefined);

  function saveList() {
    const newList = {
      id: id,
      name: text,
    };
    const newLists = [newList, ...lists];
    setLists(newLists);
    setText("");
    setId(id + 1);
    onClose();
  }

  function changeText(e) {
    setText(e.target.value);
  }

  function deleteBtn(index) {
    const newList = [...lists];
    newList.splice(index, 1);
    setLists(newList);
    setId(id - 1);
  }

  function editBtn() {}

  function changeBtn() {}

  function saveBtn() {}

  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input value={text} onChange={changeText} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveList}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {lists.map((list, index) => (
        <div
          key={index}
          className="d-flex justify-content-between p-3 mb-2"
          style={{ border: "1px grey solid", borderRadius: "5px" }}
        >
          {editing !== undefined ? (
            <div>
              <input />
              <Button onClick={changeBtn}>edit</Button>
              <Button onClick={saveBtn}>save</Button>
            </div>
          ) : (
            <>
              <div>
                {list.name} #{list.id}
              </div>
              <div>
                <Button onClick={editBtn}>Zasah</Button>
                <Button onClick={() => deleteBtn(index)}>Ustgah</Button>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}
