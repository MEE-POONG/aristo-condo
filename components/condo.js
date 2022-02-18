import React, { useState, useEffect } from "react";
import Image from "next/image";

import Aos from "aos";

import "aos/dist/aos.css";

export default function Condo() {
  const [openTab, setOpenTab] = useState(1);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="relative">
      <div className="bg-all py-20">
        <div className="grid grid-cols-12 gap-6 ">
          <div className="col-span-7">
            <Image src="/Image/room-21.jpg" width={900} height={600} />
          </div>
          <div className="col-span-5 text-center font-well">
            A Warm Welcome
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="mx-auto w-1/2 lg:max-w-4xl  line h-0.5 my-1"
            ></div>
            <div className="font-wellsub text-left my-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </div>
            <div className="font-wellsub2 text-left">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-20 ">
          <div className="col-span-5 text-center font-well">
            A Warm Welcome
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="mx-auto w-1/2 lg:max-w-4xl  line h-0.5 my-1"
            ></div>
            <div className="font-wellsub text-right my-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </div>
            <div className="font-wellsub2 text-right">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </div>
          </div>
          <div className="col-span-7 text-right">
            <Image src="/Image/room-22.jpg" width={900} height={600} />
          </div>
        </div>

        <div className="mx-auto"></div>
      </div>
    </div>
  );
}
