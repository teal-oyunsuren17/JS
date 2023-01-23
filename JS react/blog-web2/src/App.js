import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ClientZaya } from "./Client/clientZaya";
import { Admin } from "./Admin/Admin";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<ClientZaya />} />
        </Routes>

        <ToastContainer position="top-right" />
      </BrowserRouter>
    </>
  );
}
