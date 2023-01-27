import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { v4 } from "uuid";
import axios from "axios";

export function AdminModal({ show, onClose, onComplete }) {
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  function handleSave() {
    setLoading(true);

    axios
      .post("http://localhost:8080/buteegdehuun", {
        category: category,
        id: v4(),
        title: title,
        price: price,
      })
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          onComplete();
          onClose();
          setTitle("");
          setPrice("");
          setCategory("");
          setLoading(false);
        }
      });
  }
  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ангилал нэмэх</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label htmlFor="category">choose acategory:</label>
          <select
            disabled={loading}
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
            <option value="Эрэгтэй бүтээгдэхүүн">Эрэгтэй бүтээгдэхүүн</option>
            <option value="Цэвэрлэгээ">Цэвэрлэгээ</option>
            <option value="Нарны тос">Нарны тос</option>
            <option value="Багцууд">Багцууд</option>
            <option value="Бэлгийн карт">Бэлгийн карт</option>
            <option value="Хямдрөл">Хямдрөл</option>
          </select>

          <div>
            <input
              disabled={loading}
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              disabled={loading}
              placeholder="Price..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose} disabled={loading}>
            Устгах
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={loading}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
