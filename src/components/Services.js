import React from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { BsCode } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";

const Services = () => {
  return (
    <div className='mt-24 block text-left  xl:pl-40'>
      <h2 className='pl-8  text-2xl font-medium leading-9 sm:pl-16 sm:text-3xl lg:text-4xl xl:pl-0 xl:leading-[56px]'>
        We offer high <br />
        demand services
      </h2>

      <div className='xl:flex'>
        {/* UI & UX Card */}
        <div className='mt-24 pl-8 sm:pl-16 xl:mt-28 pt-12 pb-11 '>
          {/* Icon Here */}
          <div className='mb-9 flex w-[67px] h-[67px] bg-blue-400 rounded-2xl justify-center items-center'>
            <HiPencil className='border-0 w-7 h-5 text-white' />
          </div>
          <h3 className='font-bold text-2xl leading-9 text-[#333] mb-6'>
            UI/UX Design
          </h3>
          <p className='text-base text-[#4f4f4f] mb-7 sm:w-[52%]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button
            type='submit'
            className='w-1/3 h-[42px] bg-gray-300 text-base text-[#828282] leading-6 rounded-xl font-medium'
          >
            Get Started
          </button>
        </div>

        {/* Front End  Card */}
        <div className='mt-28 pl-8 shadow-lg rounded-[24px] pt-12 pb-11 bg-white sm:pl-16'>
          {/* Icon Here */}
          <div className='mb-9 flex w-[67px] h-[67px] bg-green-600 rounded-2xl justify-center items-center'>
            <BsCode className='border-0 w-7 h-5 text-white' />
          </div>
          <h3 className='font-bold text-2xl leading-9 text-[#333] mb-6'>
            Front End
          </h3>
          <p className='text-base text-[#4f4f4f] mb-7 sm:w-[52%]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button
            type='submit'
            className='w-1/3 h-[42px] bg-blue-400 text-base text-white leading-6 rounded-xl font-medium'
          >
            Get Started
          </button>
        </div>

        {/* Back End Card */}
        <div className='mt-24 pl-8 xl:mt-28 pt-12 pb-11 sm:pl-16'>
          {/* Icon Here */}
          <div className='mb-9 flex w-[67px] h-[67px] bg-[#EB5757] rounded-2xl justify-center items-center'>
            <AiOutlineProfile className='border-0 w-7 h-5 text-white' />
          </div>
          <h3 className='font-bold text-2xl leading-9 text-[#333] mb-6'>
            Back End
          </h3>
          <p className='text-base text-[#4f4f4f] mb-7 sm:w-[52%]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button
            type='submit'
            className='w-1/3 h-[42px] bg-gray-300 text-base text-[#828282] leading-6 rounded-xl font-medium'
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
