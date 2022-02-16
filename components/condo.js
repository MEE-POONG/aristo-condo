import React, { useState, useEffect } from "react";
import Image from "next/image";

import Aos from "aos";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding, FaSwimmingPool } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { GiAquarium } from "react-icons/gi";
import "aos/dist/aos.css";
import {MdMeetingRoom} from 'react-icons/md'
export default function Condo() {
  const [openTab, setOpenTab] = useState(1);
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
    <div className="relative">
      <div className="bg-condo">
        <div className="mx-auto"></div>
      </div>
      
    </div>
  );
}
