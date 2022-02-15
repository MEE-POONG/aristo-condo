import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Section1 from "../components/section-1";
import Section2 from "../components/section-2";
import Section3 from "../components/section-3";
import Aos from "aos";
import "aos/dist/aos.css";
import Condo from "../components/condo";
import Progess from "../components/progess";
export default function Index() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className=" bg-all  min-h-screen">
      <div data-aos="fade-right">
        {" "}
        <Header />
      </div>
      <Banner />

      <Section1 />
      <Section3 />
      <Section2 />
    

    
      <Progess/>
      <Footer />
    </div>
  );
}
