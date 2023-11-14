// login page
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

function Login() {
  let isValidUsername = false;
  let isValidPassword = false;
  let isValidName = false;
  let isValidPhone = false;
  let checkNum = false;

  // login page 렌더링 시 email input에 포커스가 되도록 useRef, useEffect를 사용
  const emailInputRef = useRef();

  // re-render가 될 시 실행되는 경우 방지를 위해 빈 배열을 넣음
  useEffect(() => {
    emailInputRef.current.focus();
  }, [])

  // navigate 선언
  const navigate = useNavigate();

  // email, password 입력 시 화면에 render되도록 useState 사용
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 request를 서버로 보내는 함수
  async function handleLoginDataSubmit(e) {
    // submit으로 인한 page reload를 방지하기 위해 preventDefault 사용
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
    console.log(
      `${process.env.REACT_APP_SERVICE_URL}:${process.env.REACT_APP_BACKEND_PORT}/accounts/token/`,
    );
    try {
      // .env를 바탕으로 backend 상대경로를 지정
      const response = await axios.post(
        `${process.env.REACT_APP_SERVICE_URL}:${process.env.REACT_APP_BACKEND_PORT}/accounts/token/`,
        {
          email: email,
          password: password,
        },
      );
      console.log("Login 진행 중:", response.data);
    } catch (error) {
      console.error("Authentication failed", error);
    }
  }

  // signup page로 이동시키는 함수
  const handleSignUpClick = () => {
    navigate("../signup");
  };

  return (
    <div>
      <h1>PROJ. NO NAME</h1>
      <h1>로그인</h1>
      <form onSubmit={handleLoginDataSubmit}>
        <div className="formbox">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} ref={emailInputRef}/>
        </div>
        <div className="formbox">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <h3></h3>
        <button type="submit" className="button01">
          Login
        </button>
        <button type="button" className="button01" onClick={handleSignUpClick}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
