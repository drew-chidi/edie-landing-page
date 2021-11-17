import React from "react";
import person_1 from "../assets/person_1.jpeg";
import person_2 from "../assets/person_2.jpeg";
import person_3 from "../assets/person_3.jpg";
import client from "../assets/client.jpg";

const Team = () => {
  return (
    <div>
      <div className='xl:flex xl:px-36'>
        <div className='sm:w-2/3 xl:w-1/2 xxl:w-4/5 self-center'>
          <h2 className='font-medium text-[#EB5757] text-base xs:text-lg'>
            Meet the team
          </h2>
          <p className='mt-2 mb-4 text-3xl xs:text-4xl xl:leading-[54px] w-3/4 font-medium text-[#333] '>
            We are chilled and a laidback team
          </p>
          <p className='text-base text-[#4f4f4f] w-3/4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        {/* Grid Container */}
        <div className='mt-9 mb-24 xs:grid grid-rows-2 grid-flow-col gap-x-2 lg:gap-x-8'>
          <div className='mb-4 xs:mb-0 w-[168px] h-[170px] row-span-3 xl:self-center mt-20 sm:justify-self-end xl:w-80 xl:h-80'>
            <img
              src={person_1}
              alt='person 1'
              className='max-w-full h-auto rounded-3xl'
            />
          </div>
          <div className='mb-4 xs:mb-0 w-36 h-36 xl:w-64 xl:h-64'>
            <img
              src={person_3}
              alt='person 3'
              className='max-w-full h-auto rounded-3xl'
            />
          </div>
          <div className='w-[162px] h-[167px] xl:w-[291px] xl:h-[300px]'>
            <img
              src={person_2}
              alt='person 2'
              className='max-w-full h-auto rounded-3xl'
            />
          </div>
        </div>
      </div>
      <div className='xl:pl-40'>
        <p className='font-medium text-xl xs:text-2xl xl:text-4xl xl:leadin rg-[54px] sm:w-3/4'>
          “Fast and outstanding results. Edie understands their customer’s
          needs. They have a young and talented team.”{" "}
        </p>
        <div className='flex mt-10 mb-24'>
          <div className='w-[70px] h-[70px] mr-6'>
            <img
              src={client}
              alt='client'
              className='max-w-full h-auto rounded-xl'
            />
          </div>
          <div>
            <h3 className='font-medium text-2xl mb-3'>Carlos Tran</h3>
            <p className='font-medium text-lg text-[#828282]'>
              The Decorate Gatsby
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
