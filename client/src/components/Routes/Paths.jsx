import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPages/MainLandingPage/LandingPage";
import LoginPage from "../pages/Login/LoginPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import NavBar from "../pages/NavBar/NavBar";

const Paths = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
