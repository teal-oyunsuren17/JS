import axios from "axios";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";

import AdminHeader from "./adminHeader";
import { AdminModal } from "./adminModal";
import { ProductItem } from "./productItem";

export function ProductAdd() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [searchedQuery] = useDebounce(query, 1000);

  function loadProducts(query = "") {
    axios.get(`http://localhost:8080/buteegdehuun?q=${query}`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setProducts(data);
      } else {
        alert(`Aldaa garlaa ${status}`);
      }
    });
  }

  useEffect(() => {
    loadProducts(searchedQuery);
  }, [searchedQuery]);

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
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
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
