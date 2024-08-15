import React from "react";
import LandPageImg3 from "../../../assets/LP_image_i3.png"


const LandingPage3 = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-auto px-4 justify-around overflow-hidden">
        <div className="w-full lg:w-[50%] p-8 mt-10 lg:mt-0 flex flex-col justify-center">
          <div className="font-sans text">
            <p className="font-semibold text-5xl leading-14">
              Start connecting directly <br />
              inside conversations <br />
            </p>
            <p className="py-4 font-normal leading-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore totam architecto <br/>exercitationem enim ex, doloribus cum ut laudantium laboriosam sequi expedita <br/> consequatur debitis alias cupiditate, doloremque perferendis dolore?<br/>
            </p>
          </div>
          <div className="cursor-pointer flex items-center justify-center bg-[#FB8E0B] border-[#FB8E0B] border-2 border-solid rounded-md w-1/3 p-2 mt-2">
            <button className="text-white font-normal">
              Start Chatting now
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center lg:w-[45%] lg:h-[90%]">
          <img className="h-[45%] lg:h-[100%]" src={LandPageImg3} alt="img" />
        </div>
      </div>
    </>
  );
};

export default LandingPage3;
