import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LandPageImg4 from "../../../assets/LP_image_i4.png";

const LandingPage4 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="flex items-center justify-between p-20 bg-[#f8f8fa]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex items-center"
      >
        <img className="h-[50%] w-[60rem]" src={LandPageImg4} alt="Landing Page Illustration" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start justify-between p-10 min-h-[60vh]"
      >
        <div className="flex flex-col flex-wrap items-start justify-around px-4 min-h-[10rem]">
          <h2 className="font-bold text-4xl">Get into</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            suscipit in quas, nobis dignissimos hic unde earum quaerat vitae
            ducimus iure fugiat! Aut sequi fugiat dignissimos minima ad delectus
            eaque.
          </p>
        </div>
        
        <div className="flex flex-wrap items-start justify-between px-4 p-5 w-[80%]">
          <div className="flex items-center justify-around w-[12rem]">
            <h1 className="font-medium text-4xl">4.3k+</h1>
            <p>
              Website's <br /> Powering
            </p>
          </div>
          
          <div className="flex items-center justify-around w-[12rem]">
            <h1 className="font-medium text-4xl">7M+</h1>
            <p>
              Chats in <br /> Last 2024
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage4;
