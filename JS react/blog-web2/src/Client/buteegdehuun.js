import axios from "axios";
import { useEffect, useState } from "react";
import { NavbarZaya } from "./componentsZaya/navbar";

export function Buteegdehuun() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/buteegdehuun").then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setProduct(data);
      } else {
        alert(`Aldaa garlaa ${status}`);
      }
    });
  });

  return (
    <div style={{ background: "#D4D4D4" }}>
      <NavbarZaya />
      <div className="d-flex flex-column text-center align-items-center">
        {product.map((p) => (
          <div
            key={p.id}
            className="col-lg-2 col-md-4 col-6 d-flex flex-column justify-content-between mb-3"
            // style={{ marginBottom: "20px", padding: "0 15px", height: "200px" }}
          >
            <div>
              <img
                src={p.thumbnail}
                alt=""
                style={{ width: "130px", height: "130px", borderRadius: "50%" }}
              />
            </div>
            <div>{p.title}</div>
            <div>{p.price}</div>
            <button style={{ borderRadius: "10rem", padding: "5px" }}>
              {p.category}{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
