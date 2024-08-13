import React from "react";
import LandPageImg1 from "../../../assets/LP_image_i1.png";
import { FaArrowRight } from "react-icons/fa";

const LandingPage1 = () => {
  return (
    <>
      <div className="flex px-4 justify-around overflow-y-hidden">
        <div className="w-[45%] p-8 mt-10">
          <div className="font-sans text">
            <p className="font-semibold text-5xl leading-14">
              Start chatting with <br />
              Peers, anytime, <br />
              anywhere with <br />
              Threaded <br />
            </p>
            <p className="py-4 font-normal leading-7">
              Great software that allows you to chat from any place at any <br /> 
              time without any interruption.
            </p>
          </div>
          <div className="cursor-pointer flex items-center justify-between bg-[#FB8E0B] border-[#FB8E0B] border-2 border-solid rounded-md w-1/3 p-2 mt-2">
            <button className="text-white font-normal">Start Chatting now</button>
            <FaArrowRight className= "mt-0.5 text-white text-xl" />
          </div>
        </div>
        <div className="flex justify-center">
          <img className="mt-10 h-[65%]" src={LandPageImg1} alt="img" />
        </div>
      </div>
    </>
  );
};

export default LandingPage1;
