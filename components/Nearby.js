import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { GiSandCastle } from "react-icons/gi";
import { BsStarFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Nearby() {
  return (
    <div className="tab-content tab-space text-sm lg:text-xl text-sim tracking-wide mt-12">
      <div className="mx-auto max-w-max lg:max-w-screen-xl">
        <div className="text-sim font-bold uppercase my-4 ">nearby place</div>
        <div className="grid grid-cols-12 gap-8 lg:grid-cols-12 text-center">
          <div className="lg:col-span-3 col-span-12 text-sim transition  hover:-translate-y-1 hover:scale-105  duration-300  ">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" border-2 border-jame  shadow-lg mt-4 lg:mt-0 h-60 lg:h-96  "
            >
              <div className=" flex justify-center mt-5 text-gold">
                <BsStarFill size={40} />
              </div>
              <div className=" text-sm mt-2 lg:mt-4">
                <span className="uppercase py-2 font-bold">landmark</span>
                <p className="text-xs mt-2 lg:mt-4">
                  NOK. 120 km.
                </p>
                <div className="golds h-0.5 mx-4 my-2 "></div>
                <p className="text-xs mb-5 mt-2 lg:mt-4">
                Fish Statue. 2 km.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-12 text-sim hover:-translate-y-1 hover:scale-105  duration-300 ">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" border-2 border-jame  shadow-lg mt-4 lg:mt-0 h-60 lg:h-96 "
            >
              <div className=" flex justify-center mt-5 text-gold">
                <IoSchool size={40} />
              </div>
              <div className=" text-sm mt-2 lg:mt-4">
                <span className="uppercase py-2 font-bold">academy</span>
                <p className="text-xs mt-2 lg:mt-4">
                Phuket Kindergarten. <span className="">18.3 km.</span>
                </p>
                <div className="golds h-0.5 mx-4 my-2"></div>
                <p className="text-xs mt-2 lg:mt-4">
                Satree Phuket School. 18.2 km.
                </p>
                <div className="golds h-0.5 mx-4 my-2 "></div>
                <p className="text-xs mt-2 lg:mt-4">
                Prince of Songkla University Phuket Campus. 19.2 km.
                </p>
                <div className="golds h-0.5 mx-4 my-2"></div>
                <p className="text-xs mb-5 mt-2 lg:mt-4">
                Phuket Wittayalai School. 20.2 km.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-12 text-sim hover:-translate-y-1 hover:scale-105  duration-300 " >
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" border-2 border-jame  shadow-lg mt-4 lg:mt-0 h-60 lg:h-96 "
            >
              <div className=" flex justify-center mt-5 text-gold">
                <MdLocalHospital size={40} />
              </div>
              <div className=" text-sm mt-2 lg:mt-4">
                <span className="uppercase py-2 font-bold">hospital</span>
                <p className="text-xs mt-2 lg:mt-4">
                  Patong Hospital. 8.6 km.
                </p>
                <div className="golds h-0.5 mx-4 my-2"></div>
                <p className="text-xs mt-2 lg:mt-4">Bangkok Hospital. 19.8 km.</p> 
                <div className="golds h-0.5 mx-4 my-2"></div>
                <p className="text-xs mt-2 lg:mt-4">Phuket Mission Hospital. 20.3 km.</p>
                
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-12 text-sim hover:-translate-y-1 hover:scale-105  duration-300 ">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" border-2 border-jame  shadow-lg mt-4 lg:mt-0 h-60 lg:h-96 "
            >
              <div className=" flex justify-center mt-5 text-gold">
                <FaShoppingCart size={40} />
              </div>
              <div className=" text-sm mt-2 lg:mt-4">
                <span className="uppercase py-2 font-bold">shopping mall</span>
                <p className="text-xs mt-2 lg:mt-4">Robinson, Jungceylon branch, 8.3 km.</p>
                <div className="golds h-0.5 mx-4 my-2"></div>
                <p className="text-xs mt-2 lg:mt-4 ">Central Phuket. 17.5 km.</p>
                <div className="golds h-0.5 mx-4 my-2"></div>
                <p className="text-xs mt-2 lg:mt-4 ">
                  Big C Department Store super center. 18.5 km.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
