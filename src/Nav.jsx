import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';


function Nav() {
  return (
  <div>
      <div className = "navb">
      <Link className="navMenu_logo" to={'/'}>PROJ. NO NAME /</Link>
      <Link className="navMenu_l" to={'/mypage'}>MYPAGE /</Link>
      <Link className="navMenu_l" to={'/result'}>RESULT /</Link>
      <Link className="navMenu_l" to={'/contact'}>CONTACT US /</Link>
      
      <Link className="navMenu_r" to={'/profile'}>PROFILE /</Link>
      <Link className="navMenu_r" to={'/login'}>LOGIN /</Link>
      <Link className="navMenu_r" to={'/signup'}>SIGNUP /</Link>
    </div>
  </div>
  );
}

export default Nav;
