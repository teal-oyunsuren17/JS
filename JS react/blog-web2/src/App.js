import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ClientZaya } from "./Client/zayaComponent/clientZaya";
import { Admin } from "./Admin/Admin";
import { Angilal } from "./Client/zayaComponent/angilal";
import { Brand } from "./Client/zayaComponent/brand";
import { Salbaruud } from "./Client/zayaComponent/salbaruud";
import { ProductAdd } from "./Admin/productAdd";
import { AdminAdd } from "./Admin/angilalAdd";
import AdminHeader from "./Admin/adminHeader";
import { Buteegdehuun } from "./Client/zayaComponent/buteegdehuun";
import { NuurBudalt } from "./Client/zayaAngilal/nuurBudalt";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/admin/hereglegch" element={<AdminHeader />} />
          <Route path="/admin/angilal" element={<AdminAdd />} />
          <Route path="/admin/buteegdehuun" element={<ProductAdd />} />
          <Route path="/admin/medee" element={<AdminHeader />} />

          <Route path="*" element={<ClientZaya />} />
          <Route path="/angilal/nuur-budalt" element={<NuurBudalt />} />
          <Route path="/buteegdehuun" element={<Buteegdehuun />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/salbaruud" element={<Salbaruud />} />
        </Routes>

        <ToastContainer position="top-right" />
      </BrowserRouter>
    </>
  );
}
