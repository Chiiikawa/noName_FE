import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main.jsx";
import Layout from "./Layout.jsx";
import Error from "./Pages/Error.jsx";
import Result from "./Pages/Result.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

// 모든 route를 Layout으로 감싸, 모든 페이지에서 Navbar가 뜨도록 설정
const Router = () => {
  return (
    <div className="Router">
      <BrowserRouter>
        <Layout>
        <Sidebar />
      <Routes>
            <Route path="/Error" element={<Error />} />
            <Route exact path="/" element={<Main />} />
            <Route path="/result" element={<Result />} />
      </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default Router;
