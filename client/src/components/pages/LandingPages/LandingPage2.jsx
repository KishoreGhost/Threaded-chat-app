import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import icon from "../../../assets/icon.png";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import LandPageImg2 from "../../../assets/LP_image_i2.png";

const LandingPage2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="font-sans h-auto">
      <div>
        <h2 className="font-bold text-3xl text-center mb-10">
          Features for a better experience
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-evenly"
        >
          <div className="flex items-center p-4">
            <img src={icon1} alt="" />
            <div className="p-3">
              <p className="font-bold text-xl leading-[2.5rem]">
                Video messaging
              </p>
              <p>
                This software is very easy for you to <br />
                manage. You can use if you wish.
              </p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <img src={icon} alt="" />
            <div className="p-3">
              <p className="font-bold text-xl leading-[2.5rem]">Save your time</p>
              <p>
                This software is very easy for you to <br />
                manage. You can use if you wish.
              </p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <img src={icon2} alt="" />
            <div className="p-3">
              <p className="font-bold text-xl leading-[2.5rem]">
                Keep safe & private
              </p>
              <p>
                This software is very easy for you to <br />
                manage. You can use if you wish.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-evenly p-20 bg-[#F8f8fA]"
      >
        <div>
          <img src={LandPageImg2} alt="" />
        </div>
        <div className="p-9 mx-4 flex flex-col items-start justify-between border-2 border-solid border-amber-200 w-[45%] max-h-[60vh] ">
          <h2 className="font-bold text-4xl mb-10">
            Meet your Peers, with <br />
            live video chat
          </h2>
          <p>
            unde optio accusamus cum nostrum asperiores tempore <br />
            animi ducimus odio itaque, et ex?
          </p>
          <p>
            unde optio accusamus cum nostrum asperiores tempore <br />
            animi ducimus odio itaque, et ex?
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage2;
