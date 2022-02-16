import React from "react";
import { scaleDown as Menu } from "react-burger-menu";


function Header() {
  return (
    <>
    <div className="    z-50">
  
      <Menu width={"284px"}  >
      
        <div className="pb-4 cursor-pointer text-3xl text-gold hover:-translate-y-1 hover:scale-120  duration-300  ">
          M E N U
        </div>
        <button className=" text-left menu-item  text-xl my-6 text-white w-full rounded-lg transition  hover:-translate-y-1 hover:scale-110  duration-300">
          Home
        </button>
        <div className="golds h-0.5  w-full rounded-lg my-6"></div>
        <button className=" text-left menu-item text-xl my-6  text-white  w-full rounded-lg hover:-translate-y-1 hover:scale-110  duration-300 ">
       Amenities
        </button>
        <div className="golds h-0.5 w-full rounded-lg my-6"></div>
        <button className=" text-left menu-item text-xl my-6   text-white   w-full rounded-lg hover:-translate-y-1 hover:scale-110  duration-300">
          Contact
        </button>
        <div className="golds h-0.5 w-full rounded-lg my-6"></div>
      </Menu>
    </div>
    </>
  );
}

export default Header;
