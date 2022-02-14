import React, { useState, useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding, FaSwimmingPool } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { GiAquarium } from "react-icons/gi";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Section2() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <section className="mt-12 lg:mt-24 min-h-0 pb-8 lg:pb-20  ">
        <div className="font-head text-center uppercase font-extrabold  m-2  ">
          <span
            data-aos="fade-up"
            data-aos-duration="2500"
            className="text-sim mr-2 lg:mr-12"
          >
            L U X U R Y{" "}
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="2500"
            className="text-sim"
          >
            {" "}
            A M E N I T I E S{" "}
          </span>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="mx-auto max-w-xs lg:max-w-4xl  golds h-0.5  w-full rounded-lg my-6"
        ></div>

        <div className="max-w-xs lg:max-w-4xl mx-auto">
          <div className="w-full">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="grid grid-cols-5 gap-6 text-center "
            >
              <a
                className={
                  "text-center col-span-1 hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4 " +
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
                  "text-center col-span-1 hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4  " +
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
                  "text-center col-span-1 hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4 " +
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
                  "text-center col-span-1 hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4  " +
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
                  "text-center col-span-1 hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4  " +
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

        <div className="tab-content tab-space mx-auto mt-6 text-sm lg:text-xl text-sim tracking-wide">
          <div className={openTab === 1 ? "block" : "hidden"} id="link1">
            <div className="grid grid-cols-1 lg:grid-cols-2   mx-auto max-w-xs lg:max-w-screen-xl   ">
              <div className="col-span-1 text-sim  ">
                <div data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  The Aristo Karon Condominium is located a mere 7-minute walk
                  to Karon Beach with unparalleled architecture right in the
                  heart of beautiful Karon.{" "}
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-4  ">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 mt-4 lg:mt-0    "
                >
                  <Image src="/Image/room-1.jpg" width={1024} height={576} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 "
                >
                  <Image src="/Image/room-11.jpg" width={1024} height={576} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 "
                >
                  <Image src="/Image/room-3.jpg" width={1024} height={576} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 "
                >
                  <Image src="/Image/room-6.jpg" width={1024} height={576} />
                </div>
              </div>
            </div>
          </div>
          <div className={openTab === 2 ? "block" : "hidden"} id="link2">
            <div className="grid grid-cols-1 lg:grid-cols-2  mx-auto max-w-xs lg:max-w-7xl ">
              <div className="col-span-1 text-sim  ">
                <div data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  The resort style condominium is located strategically close to
                  many tourist hotspots as well as flashy nightlife areas around
                  Phuket with the objective to provide the ultimate holiday
                  experience for all guests and residents.{" "}
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 mt-4 lg:mt-0   "
                >
                  <Image src="/Image/room-5.jpg" width={1024} height={576} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 "
                >
                  <Image src="/Image/room-25.jpg" width={1024} height={576} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 "
                >
                  <Image src="/Image/room-7.jpg" width={1024} height={576} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 "
                >
                  <Image src="/Image/room-8.jpg" width={1024} height={576} />
                </div>
              </div>
            </div>
          </div>
          <div className={openTab === 3 ? "block" : "hidden"} id="link3">
            <div className="grid grid-cols-1 lg:grid-cols-2  mx-auto max-w-xs lg:max-w-7xl ">
              <div className="col-span-1 text-sim  ">
                <div data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  For those who wish to simply enjoy the relaxing facilities can
                  conveniently immerse themselves in the spa, rooftop bar, cafes
                  and restaurants within the compound.{" "}
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-4  ">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 mt-4 lg:mt-0   "
                >
                  <Image src="/Image/room-10.jpg" width={1024} height={576} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 "
                >
                  <Image src="/Image/room-12.jpg" width={1024} height={576} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 "
                >
                  <Image src="/Image/room-8.jpg" width={1024} height={576} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 "
                >
                  <Image src="/Image/room-14.jpg" width={1024} height={576} />
                </div>
              </div>
            </div>
          </div>
          <div className={openTab === 4 ? "block" : "hidden"} id="link4">
            <div className="grid grid-cols-1 lg:grid-cols-2  mx-auto max-w-xs lg:max-w-7xl ">
              <div className="col-span-1 text-sim  ">
                <div data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  Take advantage of the popular Aristo Management Program to
                  ensure that your unit is consistently generating effortless
                  passive income while you are abroad.{" "}
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-4  ">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 mt-4 lg:mt-0   "
                >
                  <Image src="/Image/room-15.jpg" width={1024} height={576} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 "
                >
                  <Image src="/Image/room-11.jpg" width={1024} height={576} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 "
                >
                  <Image src="/Image/room-4.jpg" width={1024} height={576} />
                </div>
              </div>
            </div>
          </div>
          <div className={openTab === 5 ? "block" : "hidden"} id="link5">
            <div className="grid grid-cols-1 lg:grid-cols-2  mx-auto max-w-xs lg:max-w-7xl ">
              <div className="col-span-1 text-sim  ">
                <div data-aos="fade-up" data-aos-duration="1000">
                  {" "}
                  An attractive 3 year guarantee program that provides 8% yearly
                  returns (total of 24% over 3 years.) is available to all of
                  our investors. This option provides you with a free 4 weeks
                  stay (2 weeks high season and 2 weeks low season or 4 weeks
                  low season.{" "}
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-4  ">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 mt-4 lg:mt-0   "
                >
                  <Image src="/Image/room-1.jpg" width={1024} height={576} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 "
                >
                  <Image src="/Image/room-12.jpg" width={1024} height={576} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 "
                >
                  <Image src="/Image/room-14.jpg" width={1024} height={576} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-1 "
                >
                  <Image src="/Image/room-10.jpg" width={1024} height={576} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
