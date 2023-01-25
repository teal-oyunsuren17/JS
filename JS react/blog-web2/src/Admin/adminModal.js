import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import { toast } from "react-toastify";

export function AdminModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSave() {}

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
                <input placeholder="Title..." />
              </div>
              <div>
                <input placeholder="Price..." />
              </div>
              <div>
                <input placeholder="Category..." />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Устгах
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Хадгалах
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
