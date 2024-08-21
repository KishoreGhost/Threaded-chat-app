import React from "react";
import Logo from "../../../../assets/Threaded_logov2.png";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full min-h-[93vh]">
        <div className="font-sans flex items-center justify-center flex-col min-h-[70vh]">
          <div>
            <p className="text-4xl font-bold text-center">
              Ready to grow your business?
              <br />
              Start with Threaded, become faster
              <br />
              every second
            </p>
          </div>
          <div className="mt-10 border-2 border-solid border-[#FB8E0B] px-5 py-3 rounded-xl bg-[#FB8E0B] text-white">
            <button className="text-md font-semibold">
              Start Chatting Now
            </button>
          </div>
        </div>

        <footer className="bg-pink-200">
          <div className="flex items-center justify-between p-10">
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className="flex items-center text-lg font-medium min-w-[30%] justify-evenly">
              <ul className="cursor-pointer">About</ul>
              <ul className="cursor-pointer">Features</ul>
              <ul className="cursor-pointer">Works</ul>
              <ul className="cursor-pointer">Support</ul>
            </div>
            <div className="flex items-center justify-evenly min-w-[20%]">
              <TiSocialFacebook className="text-2xl cursor-pointer text-[#FB8E0B]" />
              <FaInstagram className="text-2xl cursor-pointer text-[#FB8E0B]" />
              <FaGithub className="text-2xl cursor-pointer text-[#FB8E0B]" />
              <BsTwitterX className="text-xl cursor-pointer text-[#FB8E0B]" />
            </div>
          </div>
          <div className="px-10 flex items-center justify-between min-h-[100%]">
            <div className="flex items-center">
              <p>© Copyright 2024, All Rights Reserved</p>
            </div>
            <div className="flex items-center justify-evenly min-w-[25%]">
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
