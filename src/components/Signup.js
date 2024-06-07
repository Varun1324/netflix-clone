import React from 'react'
import '../design/signup.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate=useNavigate();
    function signinhandler(){
      navigate('/signin')
    }

    const [newusername,setNewusername]=useState("");
    const [newemail,setNewemail]=useState("");
    const [newpassword,setNewpassword]=useState("");
    console.log(newusername,newemail,newpassword);
    const userSignupDetails={newusername,newemail,newpassword};
    const userSignupHandler=async(e)=>
    {
      e.preventDefault();
      console.log(userSignupDetails);
      try{
        const response=await fetch("https://backend-server-pugh.onrender.com/api/signup",{
          method:"POST",
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(userSignupDetails)
        })
        if (response.ok) {
          console.log("Signup Successful");
          navigate('/signin');
        } else if (response.status === 409) {
          console.log("User already exists");
        } else {
          console.log("Error while signing up");
        }
      } catch (error) 
      {
        console.error("Error:", error);
        console.log("Please try again later!");
      }
    }



  return (
    <>
      <div className="signup-cont">
        <div className="signup-div">
          <span className="welcome">Welcome</span>
          <span className="to">to</span>
          <h4 id="signup-title">NETFLIX</h4>
        </div>
      </div>

      <form onSubmit={userSignupHandler}>
        <div className="sub-container">
          <div className="cont1">
            <h3 id="signup">Sign Up</h3>
          </div>
          <div className="cont2">
            <span id="heading">Welcome back! Joining Netflix is easy.</span>
          </div>
          <div className="cont3">
          <span class="material-symbols-outlined" id="symbol">person</span>
            <input id="query" class="signup-username-input" type="text" placeholder="Username" name="newusername" onChange={(e)=>{setNewusername(e.target.value)}} required/>
          </div>
          <div className="cont4">
          <span class="material-symbols-outlined" id="symbol">mail</span>
            <input id="query2" class="signup-email-input" type="text" placeholder="Email Address" name="newemail" onChange={(e)=>{setNewemail(e.target.value)}} required/>  
          </div>
          <div className="cont5">
          <span class="material-symbols-outlined" id="symbol">lock</span>
            <input id="query" class="signup-password-input" type="text" placeholder=" New Password" name="newpassword" onChange={(e)=>{setNewpassword(e.target.value)}} required/>
          </div>
          
          <div className="cont7">
            <button id='signup-btn-2'>Sign Up</button>
          </div>
          <div className="cont8">
            <span id="already">Already have an account! <button onClick={signinhandler} className="log" id="lst2">Log in</button></span>
          </div>
        </div>
      </form>

    </>
  )
}

export default Signup;