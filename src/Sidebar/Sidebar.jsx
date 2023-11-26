import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import "./Sidebar.css";
import Signin from "../Modals/signInModal.jsx";
import ModalAccManager from "../Modals/ManageAccModal.jsx";

// 좌측에 위치할 메뉴들은 기본적으로 출력, 우측에 위치할 userMenu는 조건에 따라 출력
function Sidebar() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <div className="Sidebar">
        <Link className="sidebarMenu" to={"http://www.노네임.store"}>
          <img src="../logo.svg" />
        </Link>
        <button>Home</button>
        <button>
          <Signin />
        </button>
        <button>Bookmarks</button>
        <button>DM</button>
        <button>Profile</button>
        <button>Explore</button>
        <div class="dropdown">
          <button className="loginstatus">@username</button>
          <div className="dropdown-content">
            <a href="http://www.노네임.store">Manage Account</a>
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
