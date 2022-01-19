import React from "react";
import logo from "../../assets/Images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <div className="flex items-center px-5 justify-between shadow-md">
      {/* Arrow Icon */}
      <a
        className="w-12 h-full flex justify-center"
        onClick={() => {
          alert("Back Clicked");
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </a>
      {/* Logo */}
      <img src={logo} alt="Logo" width="120px" />
      {/* Logout Button */}
      <a
        className="w-12 h-full flex justify-center"
        onClick={() => {
          alert("Logout Clicked");
        }}
      >
        <FontAwesomeIcon icon={faPowerOff} />
      </a>
    </div>
  );
};
