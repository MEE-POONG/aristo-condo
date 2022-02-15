import React, { useState } from "react";
import Image from "next/image";
import SimpleImageSlider from "react-simple-image-slider";
export default function Section3() {
  const [openTab, setOpenTab] = useState(1);
  const room1 = [
    { url: "/Image/room-18.jpg" },
    { url: "/Image/room-19.jpg" },
  ];
  const room2 = [
    { url: "/Image/room-20.jpg" },
    { url: "/Image/room-21.jpg" },
  ];
  return (
    <div>
      <section className="  min-h-0  pt-3 lg:pt-6  pb-6">
        <div className="font-head text-center uppercase font-extrabold  m-2">
          <span className="text-gold mr-2 lg:mr-8 my-12 ">P L A N S</span>
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
                    <div className="uppercase text-xs lg:text-xl">1 ROOM</div>

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
                    <div className="uppercase text-xs lg:text-xl">
                      1 ROOM + POOL
                    </div>
                    <div className="uppercase text-xs hidden lg:block mt-4">
                      <span className="ml-2"> SEE MORE</span>
                    </div>
                  </a>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content tab-space mx-auto mt-6 text-sm lg:text-xl text-sim tracking-wide">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <div className="grid grid-cols-1  gap-6  mx-auto max-w-xs lg:max-w-screen-xl place-items-center   ">
                <div className="col-span-1 mt-4 lg:mt-0    ">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="3800"
                    className="hidden lg:block"
                  >
                    {" "}
                    <SimpleImageSlider
                      width={896}
                      height={504}
                      images={room1}
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
                      images={room1}
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
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <div className="grid grid-cols-1  gap-6  mx-auto max-w-xs lg:max-w-screen-xl place-items-center   ">
                <div className="col-span-1 mt-4 lg:mt-0    ">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="3800"
                    className="hidden lg:block"
                  >
                    {" "}
                    <SimpleImageSlider
                      width={896}
                      height={504}
                      images={room2}
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
                      images={room2}
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
