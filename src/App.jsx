import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav.jsx';
import Main from './components/Main.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/login.jsx';
import Signup from './components/Signup.jsx';
import Mypage from './components/mypage.jsx';
import Profile from './components/profile.jsx';
import Result from './components/result.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path='/login' element={<Login />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/mypage" element={<Mypage />}/>
          <Route path="/profile" element={<Profile />}/> 
          <Route path="/result" element={<Result />}/> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
