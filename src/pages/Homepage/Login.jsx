import React from "react";
import './Styles/Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/Images/Logo.png";

const Login = () => {
  return (
    <div id="main" className="flex justify-center  items-center bg-[url('../../assets/Images/bg.png')] w-screen h-screen">
      {/* //box */}
      <div className="flex items-center shadow-lg flex-col px-16 py-12 w-fit rounded-lg bg-white">
        {/* //Logo */}
        <div className="w-48">
          <img src={logo} alt="logo" />
        </div>
        {/* //p tag */}
        <div>
          <p className="text-grey py-5">Login to your account</p>
        </div>
        {/* //email */}
        <div className="my-4 border-2  w-full h-10 items-center flex justify-center flex-row">
          <span className="mx-3">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <input
            type="text"
            placeholder="Email"
            className="p-2 w-full h-full"
          />
        </div>
        {/* //Password */}
        <div className="my-4 border-2 w-64 h-9 flex justify-center flex-row items-center">
          <span className="mx-3">
            <FontAwesomeIcon icon={faLock} />
          </span>
          <input
            type="password"
            placeholder="Password"
            className="border-none w-full h-full"
          />
          <span className="mx-3">
            <FontAwesomeIcon icon={faEye} />
          </span>
        </div>
        {/* //checkbox */}
        <span>
          <input type="checkbox" className="mx-1" />
          <label htmlFor="">Remember Me</label>
        </span>
        {/* //Login */}
        <div className="my-3">
          <button onClick={()=>alert('Button Clicked')} className="bg-black text-white w-64 rounded h-9">LOGIN</button>
        </div>
        {/* // Forgot password */}
        <div>
          <a onClick={()=>alert('Forgot Password Clicked')} className="text-grey py-5">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
