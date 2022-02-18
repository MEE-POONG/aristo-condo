import React, { useState } from "react";
import Image from "next/image";


const roomtypelist = [
  { id: 1, imgs: "/Image/room-1.jpg" },
  { id: 2, imgs: "/Image/room-2.jpg" },
  { id: 3, imgs: "/Image/room-7.jpg" },
  { id: 4, imgs: "/Image/room-4.jpg" },
  { id: 5, imgs: "/Image/room-5.jpg" },
  { id: 6, imgs: "/Image/room-6.jpg" },
  { id: 7, imgs: "/Image/room-7.jpg" },
];

const planlist = [
  { id: 1, imgs: "/Image/room-10.jpg" },
  { id: 2, imgs: "/Image/room-11.jpg" },
  { id: 3, imgs: "/Image/room-12.jpg" },
  { id: 4, imgs: "/Image/room-13.jpg" },
  { id: 5, imgs: "/Image/room-14.jpg" },
  { id: 6, imgs: "/Image/room-15.jpg" },
  { id: 7, imgs: "/Image/room-16.jpg" },
];

export default function Section3() {
  const [openTab, setOpenTab] = useState(1);
  const [selectRoom, setSelectRoom] = useState("/Image/room-1.jpg");
  const [selectPlan, setSelectPlan] = useState("/Image/room-10.jpg");

  console.log(selectRoom);

  return (
    <div>
      <section className="  min-h-0  pt-3 lg:pt-6  pb-6 mt-0 lg:mt-12 ">
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
                    <div className="uppercase text-xs lg:text-xl"> Plan</div>

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
                      Room
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
                <div  data-aos="fade-up"
                      data-aos-duration="3800"
                      className="bg-all w-auto  z-10 absolute  ">
                    <select className="shadow-lg p-2 lg:w-52 w-32 text-center"
                      onChange={(e) => {
                        setSelectPlan(e.target.value);
                      }}
                    >
                      {planlist?.map((plan) => (
                        <option key={plan} value={plan.imgs}>
                          Plan {plan.id}
                        </option>
                      ))}
                    </select >
                  </div>
                  <div>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="3800"
                     
                    >
                      {/* {selectRoom} */}
                      <Image src={selectPlan} width={950} height={576} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <div className="grid grid-cols-1  gap-6  mx-auto max-w-xs lg:max-w-screen-xl place-items-center   ">
                <div className="col-span-1 mt-4 lg:mt-0">
                 <div  data-aos="fade-up"
                      data-aos-duration="3800"
                      className="bg-all w-auto  z-10 absolute  ">
                    <select className="shadow-lg p-2 w-32  lg:w-52  text-center"
                      onChange={(e) => {
                        setSelectRoom(e.target.value);
                      }}
                    >
                      {roomtypelist?.map((room) => (
                        <option key={room} value={room.imgs}>
                          Room {room.id}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="3800"
                     
                    >
                      {/* {selectRoom} */}
                      <Image src={selectRoom} width={950} height={576} />
                    </div>
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
