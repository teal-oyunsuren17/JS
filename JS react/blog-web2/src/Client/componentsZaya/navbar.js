import { NavLink } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

export function NavbarZaya() {
  return (
    <div style={{ padding: "10px 16px", background: "#222222" }}>
      <div
        style={{
          width: "100%",
          height: "65px",
          color: "#000",
          margin: "0 72px",
        }}
        className={"d-flex flex-row align-items-center"}
      >
        <img
          src="https://www.zayabilgee.mn/web/image/website/4/logo/Zayabilgee?unique=bf8d8dc"
          alt=""
          style={{ width: "auto", height: "2.5rem" }}
        />
        <div>
          <NavLink
            style={({ isActive }) => ({
              border: isActive ? "1px solid white" : "none",
              borderRadius: isActive ? "5px" : "0",
              color: "white",
              textDecoration: "none",
              padding: "8px 20px",
            })}
            to={"/angilal"}
          >
            Angilal{" "}
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => ({
              border: isActive ? "1px solid white" : "none",
              borderRadius: isActive ? "5px" : "0",
              color: "white",
              textDecoration: "none",
              padding: "8px 20px",
            })}
            to={"/brand"}
          >
            Brand{" "}
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => ({
              border: isActive ? "1px solid white" : "none",
              borderRadius: isActive ? "5px" : "0",
              color: "white",
              textDecoration: "none",
              padding: "8px 20px",
            })}
            to={"/salbaruud"}
          >
            Salbaruud{" "}
          </NavLink>
        </div>
        <div>
          <NavLink
            style={{
              color: "white",
              textDecoration: "none",
              padding: "8px 20px",
            }}
            to={"/sags"}
          >
            <MdShoppingCart />
          </NavLink>
        </div>
        <div>
          <NavLink
            style={{
              color: "white",
              textDecoration: "none",
              padding: "8px 20px",
            }}
            to={"/zurh"}
          >
            <FaHeart />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
