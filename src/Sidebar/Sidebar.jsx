import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Layout/Layout.css";
import "./Sidebar.css";
import "../App.jsx";
import SignIn from "../Modals/SignIn.jsx";
import ModalAccManager from "../Modals/MNG-ACC-Modal.jsx";
import logo from "../Assets/Logo_black.png";
import useStore from "../store/store.js";

// Hello mUI
import Avatar from "@mui/material/Avatar";

// 좌측에 위치할 메뉴들은 기본적으로 출력, 우측에 위치할 userMenu는 조건에 따라 출력
function Sidebar() {
  const navigate = useNavigate();

  //mui function

  // 모달창 노출 여부 state
  const [modalSignInOpen, setModalSignInOpen] = useState(false);
  const [modalaccountInOpen, setModalAccountOpen] = useState(false);
  // profileimage용 state 설정
  const [profileimageurl, setProfileImageUrl] = useState("");
  // useStore 사용
  const { is_login, setIsLogin } = useStore();

  // 모달창 노출
  const showSignInModal = () => {
    setModalSignInOpen(true);
  };

  const showACCModal = () => {
    setModalAccountOpen(true);
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

  // LogOut 함수. LocalStorage를 비운다.
  function handleLogOut() {
    localStorage.clear();
    setIsLogin(false);
  }
  // 서버에서 내 profile 정보를 받아오는 함수. 받은 data를 setstate하여 변수의 state를 변경 후 렌더링
  async function requestUserProfile() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/accounts/profile/`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
          },
        },
      );
      console.log("response.data:", response.data);
      if (response) {
        console.log("Profile을 모두 불러오는 중...");
        setProfileImageUrl(response.data.profile_image);
      }
    } catch (error) {
      console.log("Authentication failed", error);
    }
  }

  // Sidebar를 최초로 렌더링 시 localStorage의 token을 확인하여 로그인 여부를 체크하는 함수
  function isLoginOrNot() {
    if (localStorage.getItem("ACCESS_TOKEN") !== null) {
      setIsLogin(true); // islogin default가 false이기에, else문을 넣을 필요는 없음.
      requestUserProfile();
    }
  }

  // Login 여부 판단 실행. 최초 1회만 실행하기 위해 빈 배열 사용.
  useEffect(() => {
    isLoginOrNot();
  }, []);

  return (
    <div className="Sidebar">
      <Link className="sidebarMenu" to={"http://www.노네임.store"}>
        <img className="logoimg" src={logo} alt="NO:NAME LOGO" />
      </Link>
      <button className="nav_button" onClick={handleToHome}>
        Home
      </button>

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
            alt="No image"
            src={`${process.env.REACT_APP_BACKEND_URL}${profileimageurl}`}
          />
          {localStorage.getItem("USERNAME")
            ? localStorage.getItem("USERNAME")
            : "@Login required"}
        </button>
        <div class="dropdown-content1">
          {is_login && <p onClick={showACCModal}>Manage Account</p>}
          {is_login ? (
            <p onClick={handleLogOut}>Logout</p>
          ) : (
            <p onClick={showSignInModal}>Signin</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
