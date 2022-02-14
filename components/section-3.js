import React, { useState } from "react";
import Image from "next/image";
export default function Section3() {
  const [openTab, setOpenTab] = useState(1);
 
  return (
    <div>
      <section className="  min-h-0  pt-3 lg:pt-6  pb-6">
        <div className="font-head text-center uppercase font-extrabold  m-2">
          <span className="text-gold mr-2 lg:mr-8 my-12 ">
            A B O U T
          </span>
          {/* <span className="text-gold shadow-lg"> P L A N S </span> */}
        </div>
        <div className="mx-auto max-w-xs lg:max-w-4xl  golds h-0.5  w-full rounded-lg my-6"></div>
        <div className="mx-auto max-w-xs lg:max-w-screen-xl ">
          <div className="text-white text-sm lg:text-xl ">
            <div className="max-w-xs lg:max-w-4xl mx-auto">
              <div className="w-full">
                <div className="grid grid-cols-2 gap-6 text-center ">
                  <a
                    className={
                      "text-center col-span-1 hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4 " +
                      (openTab === 1
                        ? "text-sim  border-golds  "
                        : " text-gold ")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    <div className="uppercase text-xs lg:text-xl">
                      ROOM PLAN
                    </div>

                    <div className="uppercase text-xs hidden lg:block mt-0 lg:mt-4">
                      SEE MORE
                    </div>
                  </a>
                  <a
                    className={
                      "text-center col-span-1 hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4  " +
                      (openTab === 2
                        ? "text-sim   border-golds  "
                        : " text-gold text-sim ")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    <div className="uppercase text-xs lg:text-xl">ROOMTYPE</div>
                    <div className="uppercase text-xs hidden lg:block mt-4">
                      <span className="ml-2"> SEE MORE</span>
                    </div>
                  </a>
                  {/* <a
                className={
                  "text-center col-span-1 hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4 " +
                  (openTab === 3
                    ? "text-white  border-golds  "
                    : " text-gold ")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <div className="uppercase text-xs lg:text-xl">1 +</div>
                <div className="uppercase text-xs hidden lg:block mt-4">
                  <span>O N E </span>
                  <span className="ml-2">B E D R O O M </span>
                  <div>+ D E N</div>
                </div>
              </a>
              <a
                className={
                  "text-center col-span-1 hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4  " +
                  (openTab === 4
                    ? "text-white  border-golds  "
                    : " text-gold ")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <div className="uppercase text-xs lg:text-xl">2</div>
                <div className="uppercase text-xs hidden lg:block mt-4">
                  <span>T W O </span>
                  <span className="ml-2">B E D R O O M </span>
                </div>
              </a>
              <a
                className={
                  "text-center col-span-1 hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4  " +
                  (openTab === 5
                    ? "text-white  border-golds  "
                    : " text-gold ")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                <div className="uppercase text-xs lg:text-xl">2 +</div>
                <div className="uppercase text-xs hidden lg:block mt-4">
                  <span>T W O </span>
                  <span className="ml-2">B E D R O O M </span>
                  <div>+ G A R D E N</div>
                </div>
              </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content tab-space mx-auto mt-6 text-sm lg:text-xl text-sim tracking-wide">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  mx-auto max-w-xs lg:max-w-screen-xl   ">
                <div className="col-span-1 mt-4 lg:mt-0    ">
                  <Image src="/Image/room-1.jpg" width={1024} height={576} />
                </div>
                <div className="col-span-1 ">
                  <Image src="/Image/room-11.jpg" width={1024} height={576} />
                </div>
                <div className="col-span-1 ">
                  <Image src="/Image/room-3.jpg" width={1024} height={576} />
                </div>
                <div className="col-span-1 ">
                  <Image src="/Image/room-6.jpg" width={1024} height={576} />
                </div>
              </div>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  mx-auto max-w-xs lg:max-w-screen-xl   ">
                <div className="col-span-1 mt-4 lg:mt-0    ">
                  <Image src="/Image/room-25.jpg" width={1024} height={576} />
                </div>
                <div className="col-span-1 ">
                  <Image src="/Image/room-24.jpg" width={1024} height={576} />
                </div>
                <div className="col-span-1 ">
                  <Image src="/Image/room-23.jpg" width={1024} height={576} />
                </div>
                <div className="col-span-1 ">
                  <Image src="/Image/room-22.jpg" width={1024} height={576} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
