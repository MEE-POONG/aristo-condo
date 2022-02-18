import React, { useEffect } from "react";
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
    <footer className="min-h-0 bg-earth">
      <div className="py-6 mx-auto max-w-xs lg:max-w-7xl">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="mx-auto max-w-xs lg:max-w-4xl  tel h-0.5  w-full rounded-lg my-6"
        ></div>
        <div className="text-white uppercase text-center  grid  grid-cols-1 ">
          <div className="  place-self-center">
            <button className="text-center text-foot lg:text-left mt-4 flex   place-items-center  lg:place-content-start  col-span-4">
              Anusawari, Bang Khen, Bangkok 10220
            </button>{" "}
            <div className="flex justify-center">
              <button className="text-center lg:text-left mt-4 flex   place-items-center  col-span-1">
                <div className="footer-text mr-3 ">
                  {" "}
                  <AiFillFacebook size={40} />
                </div>{" "}
              </button>
              <button className="text-center lg:text-left mt-4 flex   place-items-center  lg:place-content-start  col-span-4">
                <div className="footer-text  mr-3">
                  {" "}
                  <FaLine size={40} />
                </div>{" "}
              </button>{" "}
              <button className="text-center lg:text-left mt-4 flex place-items-center  lg:place-content-start  col-span-4">
                <div className="footer-text  mr-3">
                  {" "}
                  <AiFillInstagram size={40} />
                </div>{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center text-xs text-foot ">
          Copyright by 2022 MEE POONG CO., LTD.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
