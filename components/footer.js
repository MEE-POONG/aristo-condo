import React ,{useEffect}from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillCopyrightCircle,
} from "react-icons/ai";
import { FaLine, FaLocationArrow } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <footer   className="min-h-0 bg-tabs">
      <div className="py-6 mx-auto max-w-xs lg:max-w-7xl">
        <div data-aos="zoom-in"
    data-aos-duration="1000" className="mx-auto max-w-xs lg:max-w-4xl  golds h-0.5  w-full rounded-lg my-6"></div>
        <div className="text-white uppercase text-center  grid  grid-cols-1 lg:grid-cols-2">
          <div className="  place-self-center">
            <div   data-aos="fade-up"
    data-aos-duration="1000" className="font-footer"> CONTRACT</div>
            <button data-aos="fade-up"
    data-aos-duration="1100"  className="text-center lg:text-left mt-4 flex  place-items-center  col-span-1">
              <div className="text-gold mr-3">
                {" "}
                <AiFillFacebook size={40} />
              </div>{" "}
              FACEBOOK
            </button>
            <button data-aos="fade-up"
    data-aos-duration="1200" className="text-center lg:text-left mt-4 flex   place-items-center  lg:place-content-start  col-span-4">
              <div className="text-gold mr-3">
                {" "}
                <FaLine size={40} />
              </div>{" "}
              LINE
            </button>{" "}
            <button data-aos="fade-up"
    data-aos-duration="1300"className="text-center lg:text-left mt-4 flex place-items-center  lg:place-content-start  col-span-4">
              <div className="text-gold mr-3">
                {" "}
                <AiFillInstagram size={40} />
              </div>{" "}
              INSTAGRAM
            </button>
          </div>
          <div className="lg:mt-0 mt-5 lg:col-span-1 col-span-1">
            <div   data-aos="fade-up"
    data-aos-duration="1000" className="font-footer flex lg:justify-start  justify-center ">
             <div className="mr-2">ADDRESS</div> 
              <div className="text-gold">
                <FaLocationArrow size={20} />
              </div>{" "}
            </div>
            <button data-aos="fade-up"
    data-aos-duration="1200" className="text-center lg:text-left mt-4 flex   place-items-center  lg:place-content-start  col-span-4">
              <div  className="text-gold "> </div> Anusawari, Bang Khen,
              Bangkok 10220
            </button>{" "}
          </div>
        </div>
        <div   className="mx-auto max-w-xs   lg:max-w-4xl   golds h-0.5  w-full rounded-lg my-6"></div>
        <div className="font-footer flex text-white justify-center text-xs ">
        Copyright by 2022 MEE POONG CO., LTD.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
