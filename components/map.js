import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { GiSandCastle } from "react-icons/gi";
import { BsStarFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Map() {
  return (
    <div className="tab-content tab-space mt-6 text-sm lg:text-xl text-sim tracking-wide">
      <div className="mx-auto max-w-max lg:max-w-screen-xl">
        <div className="text-sim font-bold uppercase my-4 ">nearby place</div>
        <div className="grid grid-cols-12 gap-8 lg:grid-cols-12 text-center">
          <div className="lg:col-span-3 col-span-12 text-sim ">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" border-2 border-jame  shadow-lg mt-4 lg:mt-0  h-60  "
            >
              <div className=" flex justify-center mt-5">
                <BsStarFill size={40} />
              </div>
              <div className=" text-sm mt-0 lg:mt-1">
                <span className="uppercase py-2">landmark</span>
                <p className="text-xs">
                  The journey takes approximately 30 minutes by car.
                </p>
                <div className="golds h-0.5 mx-4 my-2"></div>
                <p className="text-xs mb-5">
                  The journey takes approximately 30 minutes by car.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-12 text-sim">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" border-2 border-jame  shadow-lg mt-4 lg:mt-0  h-60 "
            >
              <div className=" flex justify-center mt-5">
                <IoSchool size={40} />
              </div>
              <div className=" text-sm mt-0 lg:mt-1">
                <span className="uppercase py-2">academy</span>
                <p className="text-xs">
                Phuket Kindergarten. <span className="">18.3 km.</span>
                </p>
                <div className="golds h-0.5 mx-4 my-2"></div>
                <p className="text-xs">
                Satree Phuket School. 18.2 km.
                </p>
                <div className="golds h-0.5 mx-4 my-2"></div>
                <p className="text-xs">
                Prince of Songkla University Phuket Campus. 19.2 km.
                </p>
                <div className="golds h-0.5 mx-4 my-2"></div>
                <p className="text-xs mb-5">
                Phuket Wittayalai School. 20.2 km.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-12 text-sim">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" border-2 border-jame  shadow-lg mt-4 lg:mt-0  h-60 "
            >
              <div className=" flex justify-center mt-5">
                <MdLocalHospital size={40} />
              </div>
              <div className=" text-sm mt-0 lg:mt-1">
                <span className="uppercase py-2">hospital</span>
                <p className="text-xs">
                  Patong Hospital. 8.6 km.
                </p>
                <div className="golds h-0.5 mx-4 my-2"></div>
                <p className="text-xs ">Bangkok Hospital. 19.8 km.</p> 
                <div className="golds h-0.5 mx-4 my-2"></div>
                <p className="text-xs ">Phuket Mission Hospital. 20.3 km.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-12 text-sim">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" border-2 border-jame  shadow-lg mt-4 lg:mt-0  h-60 "
            >
              <div className=" flex justify-center mt-5">
                <FaShoppingCart size={40} />
              </div>
              <div className=" text-sm mt-0 lg:mt-1">
                <span className="uppercase py-2">shopping mall</span>
                <p className="text-xs">Robinson, Jungceylon branch, 8.3 km.</p>
                <div className="golds h-0.5 mx-4 my-2"></div>
                <p className="text-xs ">Central Phuket. 17.5 km.</p>
                <div className="golds h-0.5 mx-4 my-2"></div>
                <p className="text-xs ">
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
