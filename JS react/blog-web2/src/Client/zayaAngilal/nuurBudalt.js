import { useEffect, useState } from "react";
import axios from "axios";

export function NuurBudalt() {
  const [nuurBudalt, setNuurBudalt] = useState([]);

  function loadProducts() {
    axios.get(`http://localhost:8080/buteegdehuun`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setNuurBudalt(data);
      } else {
        alert(`Aldaa garlaa ${status}`);
      }
    });
  }

  useEffect(() => {
    loadProducts();
  }, []);

  console.log(nuurBudalt);

  return (
    <div>
      {nuurBudalt
        .filter((pro) => pro.category === "")
        .map((pro) => (
          <div>{pro.title}</div>
        ))}
    </div>
  );
}
