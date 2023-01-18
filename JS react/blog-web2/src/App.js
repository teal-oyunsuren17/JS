import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./adminOriginal/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { JsApp } from "./JsApp/jsApp";
import { JsLoop } from "./JsApp/jsLoop";
import { JsCondition } from "./JsApp/jsCondition";
// import { Categories } from "./adminTeacher/Categories";
// import Button from "react-bootstrap/Button";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/js/*" element={<JsApp />}>
          <Route path="loop" element={<JsLoop />} />
          <Route path="condition" element={<JsCondition />} />
        </Route>
        <Route path="*" element={<div>Client app</div>} />
      </Routes>

      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
}
