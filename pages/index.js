import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
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
      <Concept/>
      <Section1 />
      <Condo/>
      <Section3 />
      <Section2 />
      <Googlemap />

      

      <Progess />
      <Footer />
    </div>
  );
}
