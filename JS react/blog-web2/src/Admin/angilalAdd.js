import React, { useEffect, useState } from "react";
import { AdminItem } from "./angilalItem";
import AdminHeader from "./adminHeader";

export function AdminAdd() {
  const [angilal, setAngilal] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/angilal")
      .then((req) => req.json())
      .then((data) => setAngilal(data));
  }, []);

  return (
    <div>
      <AdminHeader />
      {angilal?.map((c, i) => (
        <AdminItem product={c} index={i} list={angilal} setList={setAngilal} />
      ))}
    </div>
  );
}
