import React from "react";
import LandPageImg4 from "../../../assets/LP_image_i4.png";

const LandingPage4 = () => {
  return (
    <>
      <div className="flex items-center justify-between p-20 bg-[#f8f8fa]">
        <div className="flex items-center">
          <img src={LandPageImg4} alt="" />
        </div>
        <div className="flex flex-col items-start justify-between p-10 min-h-[60vh]">
          <div className="flex flex-col flex-wrap items-start justify-around px-4 mxy-10 min-h-[10rem]">
            <h2 className="font-bold text-4xl">Get into</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis suscipit in <br />
              quas, nobis dignissimos hic unde earum quaerat vitae ducimus iure
              fugiat! Aut <br />
              sequi fugiat dignissimos minima ad delectus eaque.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-between px-4 mxy-10 p-5 w-[80%]">
            <div className="flex items-center justify-around w-[12rem]">
              <h1 className="font-medium text-4xl">4.3k+</h1>
              <p>Website's <br/> Powering</p>
            </div>
            <div className="flex items-center justify-around w-[12rem]">
              <h1 className="font-medium text-4xl">7M+</h1>
              <p>Chats in <br/>Last 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage4;
