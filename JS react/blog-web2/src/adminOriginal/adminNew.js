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
  const [picturePath, setPicturePath] = useState("");
  const [price, setPrice] = useState("");

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
      url: picturePath,
      price: price,
    };
    const newLists = [newList, ...list];
    setList(newLists);
    setText("");
    setPicturePath("");
    setPrice("");

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

  function changePrice(e) {
    setPrice(e.target.value);
  }

  function changeImage(e) {
    setPicturePath(e.target.value);
  }

  function changeText(e) {
    setText(e.target.value);
  }

  function editList(id, index) {
    const newEditText = { ...editingText };
    newEditText[id] = list[index].text;
    setEditingText(newEditText);

    const newList = [...list];
    const bairlal = newList.findIndex((list) => list.id === id);
    newList[bairlal].edit = !newList[bairlal].edit;
    setList(newList);
  }

  function editText(id, e) {
    const newEditingText = { ...editingText };
    newEditingText[id] = e.target.value;
    setEditingText(newEditingText);
  }

  function editSave(id, index) {
    const newList = [...list];
    newList[index].text = editingText[id];
    setList(newList);

    cancelEdit(id);
  }

  function removeList(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  function cancelEdit(id) {
    const newList = [...list];
    const bairlal = newList.findIndex((list) => list.id === id);
    newList[bairlal].edit = !newList[bairlal].edit;
    setList(newList);
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
                  type={"text"}
                  value={picturePath}
                  placeholder="picture url"
                  onChange={changeImage}
                />
              </div>
              <div>
                <input
                  value={text}
                  placeholder="Buteegdehuunii ner"
                  onChange={changeText}
                />
              </div>
              <div>
                <input value={price} placeholder="Une" onChange={changePrice} />
              </div>
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
        <div key={list.id}>
          <div>
            {" "}
            <img src={list.url} alt="new" />{" "}
          </div>
          <p>{list.price}</p>
          <p> {list.text}</p>
          <div>
            {list.edit ? (
              <>
                <button onClick={() => editList(list.id, index)}>zasah</button>
                <button onClick={() => removeList(index)}>remove</button>
              </>
            ) : (
              <>
                <input
                  value={editingText[list.id]}
                  onChange={(e) => editText(list.id, e)}
                />
                <button onClick={() => cancelEdit(list.id)}>bolih</button>
                <button onClick={() => editSave(list.id, index)}>
                  hadgalah
                </button>
              </>
            )}
          </div>
          <button style={{ width: "320px" }}>sagsand nemeh</button>
        </div>
      ))}
    </div>
  );
}
