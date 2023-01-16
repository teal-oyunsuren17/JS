import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid";

export function Example() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editingText, setEditingText] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleDelete() {
    setShow(false);
  }

  function handleSave() {
    setShow(false);
    const newList = {
      text: text,
      id: uuidv4(),
      edit: true,
    };
    const newLists = [newList, ...list];
    setList(newLists);
    setText("");
  }

  function changeText(e) {
    setText(e.target.value);
  }

  function editList(id) {
    const newList = [...list];
    const index = newList.findIndex((list) => list.id === id);
    newList[index].edit = !newList[index].edit;
    setList(newList);
  }

  function editText(id, e) {
    const newEditingText = { ...editingText };
    newEditingText[id] = e.target.value;
    setEditingText(newEditingText);
  }

  function editSave() {}

  return (
    <div className=" m-5 text-center">
      <div className="d-flex justify-content-between">
        <h1>Ангилал</h1>
        <div>
          <Button variant="primary" onClick={handleShow}>
            Шинэ
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Ангилал нэмэх</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Нэр </p>
              <input
                value={text}
                placeholder="Ангиллын нэр"
                onChange={changeText}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleDelete}>
                Устгах
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Хадгалах
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      {list.map((list) => (
        <li key={list.id}>
          {list.edit ? (
            <>
              {list.text}
              <button onClick={() => editList(list.id)}>zasah</button>
            </>
          ) : (
            <>
              <input
                value={editingText}
                onChange={(e) => editText(list.id, e)}
              />
              <button>blih</button>
              <button onClick={editSave}>hadgalah</button>
            </>
          )}
        </li>
      ))}
    </div>
  );
}
