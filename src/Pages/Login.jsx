import React from "react";

function Login() {
  return (
    <>
      <div className="formbox">
        <label>*Email</label>
        <input type="email" />
      </div>
      <div className="formbox">
        <label>*password</label>
        <input type="Password" />
      </div>
      <div className="btn">
        <button>SignIn</button>
        <h3>핸들 사인인 통해서 isAuth 부탁</h3>
      </div>
    </>
  );
}

export default Login;
