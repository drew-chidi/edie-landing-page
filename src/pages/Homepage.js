import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Features from "../components/Features";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <Fragment>
      <div className='bg-[#fdfdfd]'>
        <div className='pl-2.5 pr-4 sm:px-6 lg:pl-14 lg:pr-14'>
          <Navbar />
          <header id='home'>
            <Hero />
          </header>
          <section id='services' className=''>
            <Services />
          </section>
          <section id='features' className='mt-36 block text-left'>
            <Features />
          </section>
          <section id='team' className='mt-36 block text-left '>
            <Team />
          </section>
        </div>
        <footer className='bg-[#100E1D] xl:pl-28'>
          <Footer />
        </footer>
      </div>
    </Fragment>
  );
};

export default Homepage;
