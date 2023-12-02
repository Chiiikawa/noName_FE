import React from "react";
import "./Layout.css";
import Sidebar from "../Sidebar/Sidebar.jsx";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import "../App.css";
import Main from "../Pages/Main.jsx";
import Result from "../Pages/Result.jsx";
import ContactUs from "../Pages/ContactUs.jsx";
import Error from "../Pages/Error.jsx";
import PostDetail from "../Modals/PostDetail.jsx";
import Mypage from "../Pages/Mypage.jsx"

const Layout = () => {
  return (
    <div className="Layout">
      <Routes>
        <Route path="/error" element={<Error />} />
      </Routes>
      <div className="mainbg">
        <Routes>
          <Route index element={<Main />} />
          <Route path="profiles" element={<Mypage />} />
          <Route path="result" element={<Result />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="details" element={<PostDetail />} />
          <Route path="/*" element={<Navigate to={"/error"} />} />
        </Routes>
      </div>
    <Sidebar />
    </div>
  );
};

export default Layout;
