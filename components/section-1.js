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
    <div className=" bg-lux  ">
      <section className=" ">
        
       
      </section>
    </div>
    
    </div>
  );
}
