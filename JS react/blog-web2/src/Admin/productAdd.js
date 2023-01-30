import axios from "axios";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import AdminHeader from "./adminHeader";
import { AdminModal } from "./adminModal";
import { ProductItem } from "./productItem";

export function ProductAdd() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [products, setProducts] = useState([]);

  function loadProducts() {
    axios.get("http://localhost:8080/buteegdehuun").then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setProducts(data);
      } else {
        alert(`Aldaa garlaa ${status}`);
      }
    });
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function closeModal() {
    setSearchParams({});
  }

  const editing = searchParams.get("editing") === "new";

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Бүтээгдэхүүн</h1>
        <div>
          <Button
            variant="primary"
            onClick={() => setSearchParams({ editing: "new" })}
          >
            Шинэ
          </Button>
        </div>
      </div>

      <AdminHeader />
      <AdminModal
        show={editing}
        onClose={closeModal}
        onComplete={loadProducts}
      />
      {products.map((p) => (
        <ProductItem product={p} onChange={loadProducts} />
      ))}
    </div>
  );
}
