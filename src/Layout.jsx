import React from "react";
import "./Layout.css";
import Sidebar from "./Sidebar/Sidebar.jsx";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main.jsx";
import Result from "./Pages/Result.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Error from "./Pages/Error.jsx";
import PostDetail from "./Modals/PostDetail.jsx";

const Layout = () => {
  return (
    <div className="Layout">
      <Routes>
        <Route path="/error" element={<Error />} />
      </Routes>
      <Sidebar />
      <div className="Mainregion">
        <Routes>
          <Route index element={<Main />} />
          <Route path="result" element={<Result />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="details" element={<PostDetail />} />
          <Route path="/*" element={<Navigate to={"/error"} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
