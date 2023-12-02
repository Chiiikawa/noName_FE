import { useNavigate, Link, Navigate } from "react-router-dom";
import React, { useState } from "react";
import "../Layout/Layout.css"
import "./Sidebar.css";
import "../App.jsx";
import SignIn from "../Modals/SignIn.jsx";
import ModalAccManager from "../Modals/MNG-ACC-Modal.jsx";
import logo from "../Assets/Logo_black.png";
// Hello mUI
import Avatar from "@mui/material/Avatar";

// 좌측에 위치할 메뉴들은 기본적으로 출력, 우측에 위치할 userMenu는 조건에 따라 출력
function Sidebar() {
  const navigate = useNavigate();

  //mui function

  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showSignInModal = () => {
    setModalOpen(true);
  };

  const showACCModal = () => {
    setModalOpen(true);
  };

  // Main으로 이동하는 함수
  const handleToHome = () => {
    navigate("../");
  };

  // 내 Profile Page로 이동하는 함수
  const handleToMyProfile = () => {
    navigate("/profiles");
  };
  const handleToContactUs = () => {
    navigate("/contactus");
  };

  return (
      <div className="Sidebar">
        <Link className="sidebarMenu" to={"http://www.노네임.store"}>
          <img className="logoimg" src={logo} alt="NO:NAME LOGO" />
        </Link>
        <button className="nav_button" onClick={handleToHome}>
          Home
        </button>
        <br></br>
        <button className="nav_button" onClick={showSignInModal}>
          Modal
        </button>
        {modalOpen && <SignIn setModalOpen={setModalOpen} />}

        <button className="nav_button">Bookmarks</button>

        <button className="nav_button">DM</button>

        <button className="nav_button" onClick={handleToMyProfile}>
          Profile
        </button>

        <button className="nav_button">Explore</button>

        <button className="nav_button" onClick={handleToContactUs}>
          Contact Us
        </button>

        <div class="dropdown1">
          <div className="transition" />
          <button class="dropbtn1">
            <Avatar
              alt="Remy Sharp"
              src="https://file.mk.co.kr/meet/neds/2023/09/image_readtop_2023_746119_16960518015645499.jpeg"
            />
            @username
          </button>
          <div class="dropdown-content1">
            <p onClick={showACCModal}>Manage Account</p>
            <p href="http://admin.노네임.store">Logout</p>
          </div>
        </div>
      </div>
  );
}

export default Sidebar;