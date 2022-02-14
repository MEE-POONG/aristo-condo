import Head from "next/head";
import React,{useEffect} from "react";
import Image from "next/image";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Section1 from "../components/section-1";
import Section2 from "../components/section-2";
import Section3 from "../components/section-3";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Condo from "../components/condo";


export default function Home() {
  useEffect(() => {
    Aos.init({duration : 2000});
    }, []);
  return (
    <div className=" bg-all  min-h-screen">
     <div data-aos="fade-right"> <Header /></div>
      <Banner />
 
        <Section1 />
        {/* <Condo/> */}
    
        <Section2/>
    
      {/* <div> <Section3/></div> */}
      <Footer/>
    </div>
  );
}
