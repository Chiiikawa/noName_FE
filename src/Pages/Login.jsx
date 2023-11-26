import React from "react";
import TypingTitle from "../Typing.jsx";
import Signup from "../Modal/signupModal.jsx";

function Login() {
  function Hi() {
    alert("Hi");
  }
  return (
    <>
      <button onClick={Hi}>Hi</button>
      <Signup />
      <h1>Hi I'm Joshua</h1>
      <TypingTitle />
    </>
  );
}

export default Login;
