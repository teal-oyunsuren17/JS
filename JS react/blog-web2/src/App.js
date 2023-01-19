import "./App.css";
import {
  createBrowserRouter,
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import Admin from "./adminOriginal/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Client } from "./Client/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hi</div>,
  },
  {
    path: "/help",
    element: <div>hello</div>,
  },
]);

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<Client />} />
        </Routes>

        <ToastContainer position="top-right" />
      </BrowserRouter>

      <RouterProvider router={router} />
    </>
  );
}
