// login page
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'

function Login() {
  let isValidUsername = false;
  let isValidPassword = false;
  let isValidName = false;
  let isValidPhone = false;
  let checkNum = false;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Hi!');
    // Here you can add your authentication logic, such as sending a request to a server.
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/login', {
            email,
            password,
          });

          // Handle the authentication response from the server, e.g., save the token.
          // You can also perform redirection or other actions based on the response.

          console.log('Authentication successful', response.data);
        } catch (error) {
          // Handle authentication errors here, e.g., display an error message.
          console.error('Authentication failed', error);
        }
      };

  };

  const handleSignUpClick = () => {
    // You can add the logic to navigate to the sign-up page or open a sign-up modal here.
    // eslint-disable-next-line no-restricted-globals
    window.location.href('./Signup.jsx');
    console.log('Sign Up clicked');
  };

  return (
    <div>
      <h1>PROJ. NO NAME</h1>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <div className="formbox">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className='formbox'>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <h3></h3>
        <button type="submit" className="button01">Login</button>
        <button type="button" className="button01" onClick={handleSignUpClick}>Sign Up</button>
      </form>
    </div>
    );
};

export default Login;
