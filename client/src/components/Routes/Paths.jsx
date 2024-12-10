import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPages/MainLandingPage/LandingPage";
import LoginPage from "../pages/Login/LoginPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
// import WebRTCTest1 from "../pages/WebRTC/webRTCTest1"
import NavBar from "../pages/NavBar/NavBar";

const Paths = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          {/* <Route path="/webrtc" element={<WebRTCTest1 />}></Route> */}
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
