import React, { useState, useEffect } from "react";
import Image from "next/image";

import Aos from "aos";
import "aos/dist/aos.css";
export default function Section1() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="min-h-0">
      <div className=" bg-lux  "></div>
      <div className="lg:max-w-2xl max-w-xs mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8">
          <div className="col-span-1 text-left">
            <div className="img-head uppercase mb-4 lg:mb-0 ">
              discover a secret retreat and a lifestyle
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className=" w-1/4 lg:max-w-4xl  line h-1 my-4 hidden  lg:block "
            ></div>
          </div>
          <div className="col-span-1 text-left lg:text-center">
            <div className="font-subimg font-semibold">
              Everthing about the building has been carefully considered to work in harmony with the surrounding
            </div>
            <div className="font-subimg">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
