import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Section1 from "../components/section-1";
import Section2 from "../components/section-2";
import Section3 from "../components/section-3";
import Aos from "aos";
import "aos/dist/aos.css";
import Progess from "../components/progess";
import Googlemap from "../components/googlemap";
import Concept from "../components/concept";
import Condo from "../components/condo";
import Gallery from "../components/Gallery";
import Map from "../components/map";
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
      <Concept />
      <Condo />
      <Section1 />
      <Section3 />
      <Section2 />
      <Googlemap />
      <Map/>
      <Gallery/>
     
      <Progess />
      <Footer />
    </div>
  );
}
