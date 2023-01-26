import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4, v4 } from "uuid";

export function AdminModal({ product, setProduct }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  function handleSave() {
    const newProduct = {
      category: category,
      id: v4(),
      title: title,
      price: price,
    };
    const newProducts = [newProduct, ...product];
    setProduct(newProducts);
    setTitle("");
    setPrice("");
    setCategory("");
    handleClose();
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
              <label htmlFor="category">choose acategory:</label>
              <select
                name="category"
                id="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="">...</option>
                <option value="Нүүр будалт">Нүүр будалт</option>
                <option value="Арьс арчилгаа">Арьс арчилгаа</option>
                <option value="Уруулын будаг">Уруулын будаг</option>
                <option value="Нүдний будаг">Нүдний будаг</option>
                <option value="Үнэртэн">Үнэртэн</option>
                <option value="Үс,бие арчилгаа">Үс,бие арчилгаа </option>
                <option value="Эрэгтэй бүтээгдэхүүн">
                  Эрэгтэй бүтээгдэхүүн
                </option>
                <option value="Цэвэрлэгээ">Цэвэрлэгээ</option>
                <option value="Нарны тос">Нарны тос</option>
                <option value="Багцууд">Багцууд</option>
                <option value="Бэлгийн карт">Бэлгийн карт</option>
                <option value="Хямдрөл">Хямдрөл</option>
              </select>

              <div>
                <input
                  placeholder="Title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <input
                  placeholder="Price..."
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
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
