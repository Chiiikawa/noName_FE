import styles from './ModalBasic.module.css';
import React, { useState } from 'react';
import useStore from '../store/store';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Signin({ setModalOpen }) {
  // navigate 선언
  const navigate = useNavigate();

  // email, password 입력 시 화면에 render되도록 useState 사용
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { is_login, setIsLogin } = useStore();

  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };
  const goToSignUp = () => {
    // window.open('../Pages/Signup.jsx', '_blank')
    closeModal();
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 request를 서버로 보내는 함수
  async function handleLoginDataSubmit(e) {
    localStorage.clear(); // 로그인 실행 시, 브라우저 로컬저장소에 있는 값을 모두 날려 충돌 방지 
    try {
      // .env를 바탕으로 backend 상대경로를 지정
      console.log('URL:', `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/accounts/token/`)
      console.log('email:', email)
      console.log('password:', password)
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/accounts/token/`,
        {
          email: email,
          password: password,
        },
      );
      if (response) {
        localStorage.setItem('ACCESS_TOKEN', response.data.access); //access token을 local storage에 저장
        console.log('로그인 성공!')
        setIsLogin(true);
        navigate("mainguest");  // token 저장 후 Main page로 이동
        closeModal(); // mddal 
      }
    } catch (error) {
      console.log("Authentication failed", error);  // response를 못받아 error를 띄울 경우 콘솔에 에러 띄우기
    }
  }

  return (
    <div className={styles.modalbox}>
      <div className={styles.modal}>
        <div className="Title">Sign-In Modal</div>
        <button className={styles.close} onClick={closeModal}>
          X
        </button>
        <div className="formbox">
          <label>*Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="formbox">
          <label>*password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="btn">
          <button onClick={handleLoginDataSubmit}>SignIn</button>
        </div>
        <div className="formbox">
          <h3>아이디가 없으십니까?</h3>
          <button className="signupBtn" onClick={goToSignUp}>SignUp</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
