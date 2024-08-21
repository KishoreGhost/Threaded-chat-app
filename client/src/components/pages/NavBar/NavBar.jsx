import React, { useState } from "react";
import Logo from "../../../assets/Threaded_logov2.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center p-4 px-6 lg:px-20 font-sans font-semibold border-2 border-solid border-t shadow-sm">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <img className="w-32 h-8" src={Logo} alt="Logo" />
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto lg:flex-1`}
      >
        <ul className="flex flex-col lg:flex-row items-center lg:space-x-6">
          <li className="text-lg cursor-pointer py-2 lg:py-0">Demo</li>
          <li className="text-lg cursor-pointer py-2 lg:py-0">About</li>
          <li className="text-lg cursor-pointer py-2 lg:py-0">Blog</li>
          <li className="text-lg cursor-pointer py-2 lg:py-0">Pages</li>
          <li className="text-lg cursor-pointer py-2 lg:py-0">Contact</li>
        </ul>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row items-center lg:space-x-4 mt-4 lg:mt-0`}
      >
        {!isAuthenticated ? (
          <p
            className="text-lg cursor-pointer py-2 lg:py-0 text-center"
            onClick={() => loginWithRedirect()}
          >
            Login
          </p>
        ) : (
          <p
            className="text-lg cursor-pointer py-2 lg:py-0 text-center"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </p>
        )}
        <button className="border-2 text-white border-solid border-[#FB8E0B] rounded-md bg-[#FB8E0B] px-4 h-11 mt-2 lg:mt-0">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
