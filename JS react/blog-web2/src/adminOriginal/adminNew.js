import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

export function Example() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editingText, setEditingText] = useState({});
  const [picture, setPicture] = useState({});

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
    toast.warn("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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

  function cancelEdit(id) {
    const newEditingText = { ...editingText };
    newEditingText[id] = undefined;
    setEditingText(newEditingText);
  }

  function editPicture(e) {
    const newPicture = { ...picture };
    newPicture[list.id] = e.target.value;
    setPicture(newPicture);
  }

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
              <div>
                <input
                  value={picture[list.id]}
                  type={"text"}
                  onChange={editPicture}
                  placeholder="picture url"
                />
              </div>
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
      {list.map((list, index) => (
        <li key={list.id}>
          {editingText[list.id] === undefined ? (
            <>
              {list.text}
              <button onClick={() => editList(list.id)}>zasah</button>
              <button>remove</button>
            </>
          ) : (
            <>
              <input
                value={editingText[list.id]}
                onChange={(e) => editText(list.id, e)}
              />
              <button onClick={() => cancelEdit(list.id)}>bolih</button>
              <button onClick={editSave}>hadgalah</button>
            </>
          )}
        </li>
      ))}
    </div>
  );
}
