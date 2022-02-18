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
      <div className="bg-condo">
      
        <div className="mx-auto max-w-7xl">
        <div className=" text-center text-sim font-bold uppercase  py-12 text-5xl "> See our room </div>
        <div className="grid grid-cols-4 lg:grid-cols-8">
        <div className=" col-span-4 text-sim  text-center space-y-4">
          <div className="text-lg lg:text-3xl uppercase" >MAIN ROOM</div>
          <div className="text-sm lg:text-xl text-left" > Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</div>
        </div>
        </div>
        <div className="flex">
        <div className="absolute -bottom-12 right-0 shadow-lg lg:block hidden ">
        <Image  src="/Image/room-16.jpg" width={900} height={500}/>
        </div>
        <div className="shadow-lg block lg:hidden p-4  ">
        <Image  src="/Image/room-16.jpg" width={900} height={500}/>
        </div>
 
     

</div>
        </div>
      
    
        <div className="mx-auto"></div>
      </div>
      
    </div>
  );
}
