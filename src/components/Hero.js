import React from "react";
import Contact from "./Contact";
import kanban from "../assets/team_meeting_at_board.png";
const Hero = () => {
  return (
    <div className='mt-12 block text-left'>
      <div className='pl-7 mb-4 sm:pl-14 xl:pl-56'>
        <p className='text-[10px] xs:text-xs xl:text-lg text-[#2D9CDB] '>
          Unhappy with your website?
        </p>
        <p className='text-lg xs:text-2xl font-medium leading-9 w-3/4 xs:w-[85%] sm:text-3xl sm:w-3/5 md:text-4xl xl:text-5xl xl:leading-[72px] lg:w-3/5 xl:w-3/5 xxl:w-1/2'>
          We create beautiful and fast web services
        </p>
      </div>
      <div className='w-full xs:flex xs:h-[145px] sm:h-[250px] lg:h-[354px]  bg-gray-800 rounded-2xl'>
        <img
          src={kanban}
          alt='hero'
          className='rounded-3xl h-auto xs:w-full max-w-full xl:w-full'
        />
      </div>
      <div className='mt-[22px] pl-7 sm:pl-14 sm:w-3/4  lg:max-w-[50%] xl:pl-56 xl:w-auto '>
        <p className='text-lg xs:text-2xl font-medium leading-9 w-3/5 sm:text-3xl md:text-4xl xl:w-auto xl:text-5xl xl:leading-[72px]'>
          Story, emotion and purpose
        </p>
        <p className='mt-8 w-4/5 text-xs font-normal xs:w-[70%] md:text-base xl:text-lg xl:w-[85%]'>
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </p>
        <div className='w-3/4'>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Hero;
