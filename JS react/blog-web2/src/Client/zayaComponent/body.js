import { BiSearch } from "react-icons/bi";

export function BodyZaya() {
  return (
    <div
      className="clientBody d-flex align-items-center justify-content-center"
      style={{ width: "100%", height: "40rem" }}
    >
      <input type={"search"} placeholder={"Search..."} />
      <button>
        <BiSearch />
      </button>
    </div>
  );
}
