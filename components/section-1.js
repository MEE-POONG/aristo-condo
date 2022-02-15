import React, { useState, useEffect } from "react";
import Image from "next/image";
import SimpleImageSlider from "react-simple-image-slider";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Section1() {
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
    <div className="   p-4 lg:p-0 lg:bg-all">
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
        <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 max-w-xs lg:max-w-7xl">
          <div className="col-span-1 text-center ">
            <div
              data-aos="fade-up"
              data-aos-duration="3500"
              className="   text-2xl  font-bold text-sim"
            >
              WHO WE ARE
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3600"
              className="text-xl  text-center lg:text-left text-kim"
            >
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it sss
            </div>
          </div>
          <div className=" col-span-1 lg:col-span-2 text-center ">
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
      </section>
    </div>
  );
}
