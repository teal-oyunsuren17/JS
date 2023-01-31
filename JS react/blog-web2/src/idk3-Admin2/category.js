import Button from "react-bootstrap/Button";
import dataEl from "./dataList";

export default function Category() {
  return (
    <div>
      {dataEl.map((cat1) => (
        <div
          className="mb-4"
          key={cat1.id}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {cat1.name} {cat1.id}
          <Button variant="outline-dark" style={{ border: "none" }}>
            {" "}
            Засах
          </Button>
        </div>
      ))}
    </div>
  );
}
