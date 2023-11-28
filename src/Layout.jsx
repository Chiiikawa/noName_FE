import React from "react";
import "./Layout.css";
import Sidebar from "./Sidebar/Sidebar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main.jsx";
import Error from "./Pages/Error.jsx";
import Result from "./Pages/Result.jsx";

const Layout = () => {
  return (
    <div className="Layout">
      <Sidebar />
      <Routes>
            <Route path="/Error" element={<Error />} />
            <Route exact path="/" element={<Main />} />
            <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default Layout;
