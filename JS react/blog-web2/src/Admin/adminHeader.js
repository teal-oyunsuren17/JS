import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AdminDropdown from "./adminDropdown";
import { NavLink } from "react-router-dom";

export default function AdminHeader() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Админ</Navbar.Brand>
        <Nav>
          <div className="d-flex flex-row align-items-center">
            <NavLink
              style={({ isActive }) => ({
                background: isActive ? "red" : "",
                textDecoration: "none",
                color: "white",
                padding: "10px 15px",
              })}
              to="/admin/hereglegch"
            >
              Хэрэглэгч
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                background: isActive ? "red" : "",
                textDecoration: "none",
                color: "white",
                padding: "10px 15px",
              })}
              to="/admin/angilal"
            >
              Ангилал
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                // ":hover": { background: "red" },
                background: isActive ? "red" : "",
                textDecoration: "none",
                color: "white",
                padding: "10px 15px",
              })}
              to="/admin/buteegdehuun"
            >
              Бүтээгдэхүүн
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                // ":hover": { background: "red" },
                background: isActive ? "red" : "",
                textDecoration: "none",
                color: "white",
                padding: "10px 15px",
              })}
              to="/admin/brand"
            >
              Brand
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                // ":hover": { background: isActive ? "red" : "" },
                background: isActive ? "red" : "",
                textDecoration: "none",
                color: "white",
                padding: "10px 15px",
              })}
              to="/admin/medee"
            >
              <AdminDropdown />
            </NavLink>
            <Nav.Link href="/garah">Гарах</Nav.Link>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}
