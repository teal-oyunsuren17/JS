import React, { useEffect, useState } from "react";
import { AdminItem } from "./angilalItem";
import { AdminModal } from "./adminModal";
import AdminHeader from "./adminHeader";

export function AdminAdd() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((req) => req.json())
      .then((data) => setList(data.products));
  }, []);

  return (
    <div>
      <AdminHeader />
      {/* <AdminModal /> */}
      {list?.map((c, i) => (
        <AdminItem product={c} index={i} list={list} setList={setList} />
      ))}
    </div>
  );
}
