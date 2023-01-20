import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./adminOriginal/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Client } from "./Client/client";
import { ClientHelp } from "./Client/clientHelp";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<Client />} />
          <Route path="/help" element={<ClientHelp />} />
          <Route path="/skin-care" element={<div>Skin care</div>} />
        </Routes>

        <ToastContainer position="top-right" />
      </BrowserRouter>
    </>
  );
}
