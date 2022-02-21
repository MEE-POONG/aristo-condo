import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Googlemap() {
  const [openTab, setOpenTab] = useState();
  return (
    <div>
      <div id="maps"className="mx-auto max-w-max">
        <div className="">
          <div className="font-head text-center font-extrabold">
            <a data-aos="fade-up" data-aos-duration="2500" className="text-sim">
              <div className="">
                <button
                  className={
                    "text-center col-span-1 hot mx-2 mr-10 lg:pt-0 pt-3 py-2 lg:py-4 " +
                    (openTab === 1 ? "text-gold " : " text-sim")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  G R A P H I C M A P{" "}
                </button>
                <button
                  className={
                    "text-center col-span-1 hot mx-2 lg:pt-0 pt-3 py-2 lg:py-4  " +
                    (openTab === 2 ? "text-gold    " : " text-sim")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  {" "}
                  G O O G L E M A P
                </button>
              </div>
            </a>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="mx-auto max-w-xs lg:max-w-4xl  golds h-0.5  w-full rounded-lg my-6"
            ></div>
          </div>
          <div className={openTab === 1 ? "block" : "hidden"} id="link1">
            <div data-aos="fade-up" data-aos-duration="1000">
              <Image src="/Image/room-6.jpg" width={1024} height={576} />
            </div>
          </div>
          <div className={openTab === 2 ? "block" : "hidden"} id="link2">
            <div data-aos="fade-up" data-aos-duration="1000">
              <Image src="/Image/room-7.jpg" width={1024} height={576} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
