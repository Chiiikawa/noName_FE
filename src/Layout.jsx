import React from "react";
import "./Layout.css";
import Sidebar from "./Sidebar/Sidebar.jsx";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main.jsx";
import Result from "./Pages/Result.jsx";
import Mainguest from "./Pages/Mainguest.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Error from "./Pages/Error.jsx";
import SignUp from "./Pages/Signup.jsx";
import Mypage from "./Pages/Mypage.jsx"


const Layout = () => {
  return (
    <div className="Layout">
      <Routes>
      <Route path="/error" element={<Error />} />
      </Routes>
      <Sidebar/>
      <div className="Mainregion">
      <Routes>
      <Route index element={<Main />}/>
      <Route path="mainguest" element={<Mainguest />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="result" element={<Result />} />
      <Route path="mypage" element={<Mypage />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="/*" element={<Navigate to={"/error"} />} />
      </Routes>
      </div>
    </div>
  );
};

export default Layout;
