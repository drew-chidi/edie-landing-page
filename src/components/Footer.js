import React from "react";
import Contact from "./Contact";
import { ImInstagram } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='text-white flex flex-col items-start pl-10 pt-9 xl:pt-12'>
      <div className='w-full text-left xl:w-full xl:flex xl:justify-between'>
        <ul className='contents xl:block xl:text-left'>
          <li>
            <a href='#home' alt='Homepage' className='text-lg leading-8'>
              Home
            </a>
          </li>
          <li>
            <a href='#services' alt='Homepage' className='text-lg leading-8'>
              Services
            </a>
          </li>
          <li>
            <a href='#home' alt='Homepage' className='text-lg leading-8'>
              Our Work
            </a>
          </li>
          <li>
            <a href='#home' alt='Homepage' className='text-lg leading-8'>
              Client
            </a>
          </li>
          <li>
            <a href='#home' alt='Homepage' className='text-lg leading-8'>
              Contact
            </a>
          </li>
        </ul>
        <div className='mt-16 block text-left xl:mt-0'>
          <h2 className='text-4xl leading-[53px] font-extrabold'>Edie</h2>
          {/* Social Icons */}
          <div className='flex mt-2 mb-16'>
            <span className='pr-3'>
              <ImInstagram className='text-2xl ' />
            </span>
            <span className='pr-3'>
              <FaLinkedin className='text-2xl ' />
            </span>
            <span>
              <FaTwitterSquare className='text-2xl' />
            </span>
          </div>
        </div>

        {/* Contact */}

        <div className='w-full md:w-3/5 pr-10 xl:w-1/3'>
          <Contact />
        </div>
      </div>

      {/* Copyright */}
      <p className='mt-40 mb-6 leading-4 text-sm font-medium lg:mx-auto'>
        {" "}
        created by <u className='font-bold'>Andrew Chidi</u> - devChallenges.io{" "}
      </p>
    </div>
  );
};

export default Footer;
