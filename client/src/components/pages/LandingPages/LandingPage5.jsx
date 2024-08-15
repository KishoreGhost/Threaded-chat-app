import React from "react";
import LandPageImg5 from "../../../assets/LP_image_i5.png";
import LandPageImg6 from "../../../assets/DP_WadeWarren.png"
import LandPageImg7 from "../../../assets/DP_EstherHoward.png"

const LandingPage5 = () => {
  return (
    <>
      {/* <div classNameName='flex min-h-[100vh] bg-[#fb8e0b]'>
            <div>

            <img src={LandPageImg5} alt="" />
            </div>
            <div classNameName=''>
                <h2>
                    Our blessed client <br/>
                    said about us 😍
                </h2>

            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div> */}
      <div className="relative bg-[#fb8e0b] py-16">
        <div className="absolute inset-0 ">
          <img
            src={LandPageImg5}
            alt="Curved Background"
            className=" object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-8">
            Our blessed client said about us{" "}
            <span className="text-2xl">😍</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-xl font-semibold text-orange-600">
                “Incredible Experience”
              </p>
              <p className="mt-4 text-gray-700">
                We had an incredible experience working with Mixland and were
                impressed they made such a big difference in only three weeks.
                Our team is so grateful for the wonderful improvements they made
                and their ability to get familiar with the concept so quickly.
              </p>
              <div className="mt-6 flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={LandPageImg6}
                  alt="Wade Warren"
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Wade Warren</p>
                  <p className="text-gray-600">CEO, ABC Corporation</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-xl font-semibold text-orange-600">
                “Dependable, Responsive, Professional”
              </p>
              <p className="mt-4 text-gray-700">
                Fermin Apps has collaborated with Mixland team for several
                projects such as Photo Sharing Apps and Custom Social Networking
                Apps. The experience has been pleasant, professional and
                exceeding our expectations. The team is always thinking beyond.
              </p>
              <div className="mt-6 flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={LandPageImg7}
                  alt="Esther Howard"
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Esther Howard</p>
                  <p className="text-gray-600">CEO, ABC Corporation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage5;
