import Dropdown from "react-bootstrap/Dropdown";
export default function AdminDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Мэдээ
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Мэдээ</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Сэтгэгдэл</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Шинэ мэдээ</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
