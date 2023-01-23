import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { AdminItem } from "./adminItem";
import { AdminModal } from "./adminModal";

export function AdminAdd() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((req) => req.json())
      .then((data) => setList(data.products));
  }, []);

  return (
    <div>
      <AdminModal />
      {list.map((c, i) => (
        <AdminItem product={c} index={i} list={list} setList={setList} />
      ))}
    </div>
  );
}
