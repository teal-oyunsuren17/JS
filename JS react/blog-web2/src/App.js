import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./adminOriginal/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Client } from "./Client/clientNature";
// import { ClientHelp } from "./Client/clientHelp";
import { ClientZaya } from "./Client/clientZaya";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<ClientZaya />} />
          {/* <Route path="/help" element={<ClientHelp />} /> */}
          {/* <Route path="/skin-care" element={<div>Skin care</div>} /> */}
        </Routes>

        <ToastContainer position="top-right" />
      </BrowserRouter>
    </>
  );
}

// import React from "react";
// import Dashboard from "./components/dashboard";
// import Navbar from "./components/navbar";
// import Sidebar from "./components/sidebar";

// function App() {
//   return (
//     <div>
//       hi
//       <Navbar />
//       <div class="container-fluid" id="main">
//         <div class="row row-offcanvas row-offcanvas-left">
//           <Sidebar />
//           <Dashboard />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
