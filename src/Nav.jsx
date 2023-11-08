import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';


function Nav() {
  return (
  <div>
      <div className = "navb">
      <Link className="navMenu" to={'/'}>PROJ. NO NAME /</Link>
      <Link className="navMenu" to={'/mypage'}>MYPAGE /</Link>
      <Link className="navMenu" to={'/result'}>RESULT /</Link>
      <Link className="navMenu" to={'/contact'}>CONTACT US /</Link>
      
      <Link className="navMenu_r" to={'/profile'}>PROFILE /</Link>
      <Link className="navMenu_r" to={'/login'}>LOGIN /</Link>
    </div>
  </div>
  );
}

export default Nav;
