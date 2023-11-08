import React, { useState } from 'react';
import '../App.css'



function SignUp() {



  return (
    <div>
      <h1>회원가입</h1>

      <br></br>
      <label>이메일: </label>
      <input id="signupbar01" type="email" name="email" />

      <br></br>
      <label>아이디: </label>
      <input id="signupbar01" type="id" name="id" />

      <br></br>
      <label>이름: </label>
      <input id="signupbar01" type="name" name="name" />

      <br></br>
      <label>휴대폰번호: </label>
      <input id="signupbar01" type="phone" name="phone" />

      <br></br>
      <label>비밀번호: </label>
      <input id="signupbar01" type="password1" name="password1" />
      
      <br></br>
      <label>비밀번호 확인: </label>
      <input id="signupbar01" type="password2" name="password2" />

      <br></br>
      <br></br>
      <button type="submit" className="button01">재설정</button>
      <button type="submit" className="button01">가입</button>
      
    </div>
  );
}

export default SignUp;