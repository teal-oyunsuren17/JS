import { useEffect, useState } from "react";
import AdminHeader from "./adminHeader";
import { AdminModal } from "./adminModal";
import { ProductItem } from "./productItem";

export function ProductAdd() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/buteegdehuun")
      .then((req) => req.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <AdminHeader />
      <AdminModal product={products} setProduct={setProducts} />
      {products.map((p, index) => (
        <ProductItem
          product={p}
          index={index}
          products={products}
          setProducts={setProducts}
        />
      ))}
    </div>
  );
}
