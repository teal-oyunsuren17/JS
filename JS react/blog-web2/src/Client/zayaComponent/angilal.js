import axios from "axios";
import { useEffect, useState } from "react";
import { NavbarZaya } from "./navbar";

export function Angilal() {
  const [product, setProduct] = useState([]);

  function changePath() {}

  useEffect(() => {
    axios.get("http://localhost:8080/angilal").then((res) => {
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
      <div className="d-flex flex-row flex-wrap text-center">
        {product.map((p) => (
          <div
            key={p.id}
            className="col-lg-2 col-md-4 col-6 d-flex flex-column justify-content-between"
            style={{ marginBottom: "20px", padding: "0 15px", height: "200px" }}
          >
            <div>
              <img
                src={p.thumbnail}
                alt=""
                style={{ width: "130px", height: "130px", borderRadius: "50%" }}
              />
            </div>
            <button
              onClick={() => changePath()}
              style={{ borderRadius: "10rem", padding: "5px" }}
            >
              {p.title}{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
