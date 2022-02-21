import React from "react";
import { scaleDown as Menu } from "react-burger-menu";
import { Scrollchor } from 'react-scrollchor';

function Header() {
  return (
    <>
    <div className="    z-50">
  
      <Menu width={"284px"}  >
      
        <div className="pb-4 cursor-pointer text-xl lg:text-2xl text-gold hover:-translate-y-1 hover:scale-120  duration-300  ">
          M E N U
        </div>
        <a  className=" text-left menu-item  text-xs lg:text-md my-6 text-white w-full rounded-lg transition  hover:-translate-y-1 hover:scale-110  duration-300">
        <Scrollchor to="home" className="nav-link uppercase">H O M E</Scrollchor>  
        </a>
        <div className="golds h-0.5  w-full rounded-lg my-6"></div>
        <a  className=" text-left menu-item text-xs lg:text-md my-6  text-white  w-full rounded-lg hover:-translate-y-1 hover:scale-110  duration-300 ">
        <Scrollchor to="plans" className="nav-link uppercase"> P l a n s</Scrollchor>  
        </a>
        <div className="golds h-0.5 w-full rounded-lg my-6"></div>
        <a  className=" text-left menu-item text-xs lg:text-md my-6  text-white  w-full rounded-lg hover:-translate-y-1 hover:scale-110  duration-300 ">
        <Scrollchor to="ament" className="nav-link uppercase"> A M E N I T I E S</Scrollchor>  
        </a>
        <div className="golds h-0.5 w-full rounded-lg my-6"></div>
        <a  className=" text-left menu-item text-xs lg:text-md my-6   text-white   w-full rounded-lg hover:-translate-y-1 hover:scale-110  duration-300">
        <Scrollchor to="maps" className="nav-link uppercase"> L O C A T I O N</Scrollchor>  
        </a>
        <div className="golds h-0.5 w-full rounded-lg my-6"></div>
        <a  className=" text-left menu-item text-xs lg:text-md my-6   text-white   w-full rounded-lg hover:-translate-y-1 hover:scale-110  duration-300">
        <Scrollchor to="progess" className="nav-link uppercase">P r o j e c t P r o g r  e s s</Scrollchor>  
        </a>
        <div className="golds h-0.5 w-full rounded-lg my-6"></div>
      </Menu>
    </div>
    </>
  );
}

export default Header;
