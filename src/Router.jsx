import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout.jsx";


// 모든 route를 Layout으로 감싸, 모든 페이지에서 Navbar가 뜨도록 설정
const Router = () => {
  return (
    <div className="Router">
      <BrowserRouter>
      <Layout/>
      </BrowserRouter>
    </div>
  );
};

export default Router;