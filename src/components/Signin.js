import React, { useEffect, useState } from 'react'
import '../design/signin.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {

  const navigate = useNavigate();
  function signuphandler() {
    navigate('/signup')
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [did, setDid] = useState(false)
  console.log(email, password, message);
  const userDetails = { email, password }
  const userHandler = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    try {
      const response = await fetch("http://localhost:3000/api/signin/", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userDetails) });
      if (response.ok) {
        setMessage("Login Successful");
        toast.success("Login Successful");
        setDid(true);
      }
      else {
        setMessage("Invalid Username or Password!")
      }
    } catch (error) {
      console.error("Error logging in :", error);
      setMessage("An error occurred! Please try again later.")
    }

  }

  useEffect(() => {
    if (did) {
      navigate('/dashboard')
    }
  }, [did, navigate])

  return (
    <>
      <div className="signin-cont">
        <div className="signin-div">
          <h4 id="signin-title">NETFLIX</h4>
        </div>
      </div>

      <form onSubmit={userHandler}>
        <div className="sub-cont">
          <div className="div-1"><h3 id="signin">Sign In</h3></div>
          <div className="div-2">
            <span class="material-symbols-outlined">mail</span>
            <input id="query" class="signin-email-input" type="text" placeholder="Email or Mobile Number" name="email" onChange={(e) => { setEmail(e.target.value) }} required />
          </div>
          <div className="div-3">
            <span className="material-symbols-outlined">password</span>
            <input id="query2" className="signin-password-input" type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="div-4">
            <button id="signin-btn-2" type="submit">Sign In</button>
          </div>
          <div className="div-5">
            OR
          </div>
          <div className="div-6">
            <button id="lst">Forgot Password?</button>
          </div>
          <div className="div-7">
            <span >New to Netflix? <button type="button" onClick={signuphandler} id="lst">Sign up now.</button></span>
          </div>
          <div className="warning">
            {message && <p style={{ color: 'white' }}>{message}</p>}
          </div>
        </div>
      </form>
      <ToastContainer />
    </>

  )
}

export default Signin;