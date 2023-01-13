import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AdminDropdown from "./adminDropdown";

export default function AdminHeader() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Админ</Navbar.Brand>
        <Nav>
          <div className="d-flex flex-row align-items-center">
            <Nav.Link href="#home">Хэрэглэгч</Nav.Link>
            <Nav.Link href="#features">Ангилал</Nav.Link>
            <Nav.Link href="garah">Сэдэв</Nav.Link>
            <Nav.Link href="#pricing">
              <AdminDropdown />
            </Nav.Link>
            <Nav.Link href="garah">Гарах</Nav.Link>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}
