import Button from "react-bootstrap/Button";
import { BsFillArchiveFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";

function CloseBtn() {}

export default function AddBtn() {
  return (
    <div className="addBtnCont">
      <div className="addBtnMain d-flex flex-row justify-content-between align-items-baseline">
        <h5>Ангилал нэмэх</h5>
        <Button
          variant="outline-dark"
          style={{ border: "none" }}
          onClick={CloseBtn}
        >
          <TfiClose />
        </Button>
      </div>
      <div
        style={{
          width: "100%",
          borderBottom: "1px grey solid",
          padding: "5px",
        }}
      >
        <h6>Нэр</h6>
        <input
          type={"text"}
          placeholder={"Ангиллын нэр"}
          style={{ width: "100%" }}
        ></input>
      </div>
      <div
        style={{
          padding: "5px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button variant="danger">
          <BsFillTrashFill />
        </Button>
        <Button variant="primary">
          <BsFillArchiveFill />
        </Button>
      </div>
    </div>
  );
}
