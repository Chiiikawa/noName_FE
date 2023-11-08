import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav.js';
import Main from './components/Main.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />;
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
