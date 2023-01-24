import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ClientZaya } from "./Client/clientZaya";
import { Admin } from "./Admin/Admin";
import { Angilal } from "./Client/angilal";
import { Brand } from "./Client/brand";
import { Salbaruud } from "./Client/salbaruud";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<ClientZaya />} />
          <Route path="/angilal" element={<Angilal />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/salbaruud" element={<Salbaruud />} />
        </Routes>

        <ToastContainer position="top-right" />
      </BrowserRouter>
    </>
  );
}
