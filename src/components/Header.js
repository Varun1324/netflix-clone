import React from "react";
import '../design/header.css';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate=useNavigate();
  function handleSignin(){
    navigate('/signin')
  }
  return (
    <div className="main-container">
      <div className="title">
        <h4 id="title-name">NETFLIX</h4>
      </div>
      <div className="signin-div">
          <button id='signin-btn' onClick={handleSignin}>Sign In</button>
      </div>
    </div>
  );
}

export default Header;
