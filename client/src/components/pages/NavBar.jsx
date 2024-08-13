import React from "react";
import Logo from "../../assets/Threaded_logov2.png";

const NavBar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between items-center p-4 px-20 font-sans font-semibold border-2 border-solid border-t shadow-sm ">
        <div>
          <img className="w-40 h-10" src={Logo} alt="Logo" />
        </div>
        <div className="flex items-center justify-between w-1/3">
          <ul className="text-lg">Demo</ul>
          <ul>About</ul>
          <ul>Blog</ul>
          <ul>Pages</ul>
          <ul>Contact</ul>
        </div>
        <div className="flex items-center justify-between w-1/5 px-4">
          <div>
            <p>Login</p>
          </div>
          <div className="flex items-center justify-center">
            <button className="border-2 text-white border-solid border-[#FB8E0B] rounded-md bg-[#FB8E0B] px-4 h-11">Get Started</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
