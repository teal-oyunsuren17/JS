import Admin from "./adminOriginal/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";

export default function App() {
  return (
    <>
      <Admin />
    </>
  );
}

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import BasicExample from "./Admin/dropdown";
// import Category from "./Admin/category";
// import AddBtn from "./Admin/addBtn";
// import { useState } from "react";

// export default function ColorSchemesExample() {
//   const [editing, setEditing] = useState(
//     <div style={{ width: "100px", height: "100px" }}></div>
//   );

//   function AddWindow() {
//     setEditing(<AddBtn />);
//   }

//   return (
//     <>
//       <div>
//         <Navbar bg="dark" variant="dark">
//           <Container>
//             <Navbar.Brand href="#home">Админ</Navbar.Brand>
//             <Nav className="me-auto d-flex flex-row align-items-baseline">
//               <Nav.Link href="#home">Хэрэглэгч</Nav.Link>
//               <Nav.Link href="#features">Ангилал</Nav.Link>
//               <Nav.Link href="garah">Сэдэв</Nav.Link>
//               <Nav.Link href="#pricing">
//                 {" "}
//                 <BasicExample />{" "}
//               </Nav.Link>
//               <Nav.Link href="garah" style={{ width: "200px" }}></Nav.Link>
//               <Nav.Link href="garah">Гарах</Nav.Link>
//             </Nav>
//           </Container>
//         </Navbar>

//         <div
//           className=""
//           style={{
//             marginLeft: "100px",
//             marginRight: "100px",
//             marginTop: "20px",
//           }}
//         >
//           <div className=" flex-row d-flex justify-content-between">
//             <h1>Ангилал</h1>
//             <Button
//               className="addBtn"
//               variant="outline-primary"
//               onClick={AddWindow}
//             >
//               Шинэ
//             </Button>{" "}
//           </div>
//           {editing}
//           <Category />
//         </div>
//       </div>

//       <script src="addBtn.js"></script>
//     </>
//   );
// }
