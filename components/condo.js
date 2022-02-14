import React, { useState, useEffect } from "react";
import Image from "next/image";
import SimpleImageSlider from "react-simple-image-slider";
import Aos from "aos";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding, FaSwimmingPool } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { GiAquarium } from "react-icons/gi";
import "aos/dist/aos.css";
import {MdMeetingRoom} from 'react-icons/md'
export default function Condo() {
  const [openTab, setOpenTab] = useState(1);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const images = [
    { url: "/Image/room-1.jpg" },
    { url: "/Image/room-2.jpg" },
    { url: "/Image/room-3.jpg" },
    { url: "/Image/room-4.jpg" },
    { url: "/Image/room-5.jpg" },
    { url: "/Image/room-6.jpg" },
    { url: "/Image/room-7.jpg" },
  ];
  return (
    <div className="bg-condo p-4 lg:p-0 lg:bg-all">
      <section className="min-h-0 mt-10 bg-all p-4">
        <div className="flex justify-center ">
          <button data-aos="fade-up" className="us  text-sim ">
            Discover Our
          </button>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="3200"
          className="mx-auto max-w-xs lg:max-w-4xl  golds h-0.5  w-full rounded-lg my-6"
        ></div>
        <div className="mx-auto grid gap-4 grid-cols-3 max-w-xs lg:max-w-7xl">
        <div className="max-w-xs lg:max-w-4xl mx-auto">
          <div className="w-full">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="  text-center "
            >
              <a
                className={
                  "text-center  hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4 " +
                  (openTab === 1 ? "text-gold  border-golds  " : " text-sim")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <div className="hidden lg:block">
                  {" "}
                  <IoLocationSharp size={40} />
                </div>
                <div className=" lg:hidden">
                  {" "}
                  <IoLocationSharp size={20} />
                </div>

                <div className="uppercase text-xs hidden lg:block mt-0 lg:mt-4">
                  L o c a t i o n
                </div>
              </a>
              <a
                className={
                  "text-center  hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4  " +
                  (openTab === 2 ? "text-gold  border-golds  " : " text-sim")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <div className="hidden lg:block">
                  {" "}
                  <FaBuilding size={40} />
                </div>
                <div className=" lg:hidden">
                  {" "}
                  <FaBuilding size={20} />
                </div>
                <div className="uppercase text-xs hidden lg:block mt-4">
                  <span>R O O F T O P </span>
                  <span className="ml-2">D E C K</span>
                </div>
              </a>
              <a
                className={
                  "text-center  hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4 " +
                  (openTab === 3 ? "text-gold  border-golds  " : " text-sim")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <div className="hidden lg:block">
                  {" "}
                  <FaSwimmingPool size={40} />
                </div>
                <div className=" lg:hidden">
                  {" "}
                  <FaSwimmingPool size={20} />
                </div>
                <div className="uppercase text-xs hidden lg:block mt-4">
                  <span>I n f i n i t y </span>
                  <span className="ml-2"> P o o l s</span>
                </div>
              </a>
              <a
                className={
                  "text-center  hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4  " +
                  (openTab === 4 ? "text-gold  border-golds  " : " text-sim")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <div className="hidden lg:block">
                  {" "}
                  <IoIosFitness size={40} />
                </div>
                <div className=" lg:hidden">
                  {" "}
                  <IoIosFitness size={20} />
                </div>
                <div className="uppercase text-xs hidden lg:block mt-4">
                  <span>F i t t n e s s </span>
                  <span className="ml-2">c e n t e r </span>
                </div>
              </a>
              <a
                className={
                  "text-center  hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4  " +
                  (openTab === 5 ? "text-gold  border-golds  " : " text-sim")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                <div className="hidden lg:block">
                  {" "}
                  <GiAquarium size={40} />
                </div>
                <div className=" lg:hidden">
                  {" "}
                  <GiAquarium size={20} />
                </div>
                <div className="uppercase text-xs hidden lg:block mt-4">
                  A q u a r i um
                </div>
              </a>
            </div>
          </div>
        </div>
          <div className=" col-span-1  text-center ">
          <div className="tab-content tab-space mx-auto mt-6 text-sm lg:text-xl text-sim tracking-wide">
          <div className={openTab === 1 ? "block" : "hidden"} id="link1">
            <div className="grid grid-cols-1 lg:grid-cols-2   mx-auto max-w-xs lg:max-w-screen-xl   ">
            <div
              data-aos="fade-up"
              data-aos-duration="3800"
              className="hidden lg:block"
            >
              {" "}
              <SimpleImageSlider
                width={896}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
                navSize={20}
                useGPURender={true}
                autoPlay={true}
                loop={true}
                slideDuration="1.2"
                autoPlayDelay="2"
              />
            </div>
            <div className=" block lg:hidden">
              {" "}
              <SimpleImageSlider
                width={320}
                height={180}
                images={images}
                showBullets={true}
                useGPURender={true}
                showNavs={true}
                navSize={20}
                autoPlay={true}
                loop={true}
                slideDuration="1.2"
                autoPlayDelay="2"
              />
            </div>
            </div>
          </div>
         
         
        </div>
           
          </div>
        </div>
      </section>
    </div>
  );
}
