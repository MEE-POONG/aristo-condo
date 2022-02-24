import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function Googlemap() {
  const [openTab, setOpenTab] = useState();
  return (
    <div>
      <div id="maps" className="mx-auto max-w-max">
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
              <iframe
              className="lg:block hidden"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15810.01982861464!2d98.2994251521303!3d7.842098900449097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd88f0c160e2e041a!2sThe%20Aristo%20Condo%20Karon%20Beach!5e0!3m2!1sth!2sth!4v1645518461863!5m2!1sth!2sth"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
               <iframe
              className="lg:hidden block"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15810.01982861464!2d98.2994251521303!3d7.842098900449097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd88f0c160e2e041a!2sThe%20Aristo%20Condo%20Karon%20Beach!5e0!3m2!1sth!2sth!4v1645518461863!5m2!1sth!2sth"
                width="260"
                height="190"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
