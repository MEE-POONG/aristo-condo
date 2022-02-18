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
      <div className="bg-all p-12">

     <div className="grid grid-cols-12 gap-6 ">
       <div className="col-span-12 lg:col-span-8">
       <Image src="/Image/room-21.jpg" width={1200} height={600} />
       </div>
       <div className="col-span-12 lg:col-span-4 text-left">
asdasd
       </div>

     </div>

     <div className="grid grid-cols-12 gap-6  mt-28">
     <div className="col-span-12 lg:col-span-4 text-left">
asdasd
       </div>
       <div className="col-span-12 lg:col-span-8">
       <Image src="/Image/room-21.jpg" width={1400} height={600} />
       </div>


     </div>


        <div className="mx-auto"></div>
      </div>
    </div>
  );
}
