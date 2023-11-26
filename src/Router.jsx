import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import SignupPG from "./Pages/Signup.jsx";

// 모든 route를 Layout으로 감싸, 모든 페이지에서 Navbar가 뜨도록 설정
const Router = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignupPG />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default Router;
