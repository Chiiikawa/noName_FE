import { useNavigate, Link, Navigate } from "react-router-dom";
import React, { useState } from "react";
import "./Sidebar.css";
import Signin from "../Modals/signInModalBase.jsx";
import ModalAccManager from "../Modals/MNG-ACC-Modal.jsx";
import logo from '../Assets/Logo_black.png';

// 좌측에 위치할 메뉴들은 기본적으로 출력, 우측에 위치할 userMenu는 조건에 따라 출력
function Sidebar() {
  const navigate = useNavigate();

  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };
  
  // Main으로 이동하는 함수
  const handleToHome = () => {
    navigate('../')
  }

  // 내 Profile Page로 이동하는 함수
  const handleToMyProfile = () => {
    navigate('../')
  }

  return (
    <div>
      <div className="Sidebar">
        <Link className="sidebarMenu" to={"http://www.노네임.store"}>
        <img src={logo} alt="NO:NAME LOGO" />
        </Link>
        <button className="nav_button" onClick={handleToHome}>Home</button>
        <br></br>
        <button className="nav_button" >
        <button className="nav_button" onClick={showModal}>모달 띄우기</button>
        {modalOpen && <Signin setModalOpen={setModalOpen} />}
        </button>
        <br></br>
        <button className="nav_button">Bookmarks</button>
        <br></br>
        <button className="nav_button">DM</button>
        <br></br>
        <button className="nav_button" onClick={handleToMyProfile}>Profile</button>
        <br></br>
        <button className="nav_button">Explore</button>
        <br></br>
        <button className="nav_button">Error_temp</button>
        <br></br>
        <button className="nav_button">Contactus_temp</button>

        <div className="dropdown">
          <button className="loginstatus">@username</button>
          <div className="dropdown-content">
            <a href="http://www.노네임.store">Manage Account</a>
            <a href="http://localhost:3000/contact/"
         target="_blank"
         rel="noopener noreferrer">
      contactus 이동</a>
            <button onClick={showModal}>모달 띄우기</button>
            {modalOpen && <ModalAccManager setModalOpen={setModalOpen} />}
            <a href="http://admin.노네임.store">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
