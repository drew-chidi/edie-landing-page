import React from "react";
import booking from "../assets/booking_cover.jpg";
import dashboard from "../assets/dashboard.png";
import onboard from "../assets/onboard.png";
import product from "../assets/juice_product.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Features = () => {
  return (
    <div className='xl:flex flex-col items-start'>
      <h2 className='w-3/4 text-lg xs:text-2xl font-medium leading-9 mb-12 sm:text-3xl sm:w-3/5 lg:text-4xl  xl:pl-40 xl:leading-[54px] xl:w-1/2 xxl:max-w-[40%]'>
        Good design means good business
      </h2>
      <div className='self-center xl:grid grid-cols-2'>
        {/* Full Stack Card */}
        <article className='mb-8 xl:mt-40 xl:w-max  '>
          <div className='mb-3 bg-[#EB5757] w-full overflow-hidden rounded-2xl xl:w-[500px] xl:h-[400px]'>
            <img
              src={dashboard}
              alt='dashboard'
              className='-skew-y-12 max-w-full xl:text-center xl:w-full xl:h-full'
            />
          </div>
          <p className='text-[10px] xs:text-xs font-light text-[#828282] sm:text-sm'>
            Full stack application
          </p>
          <p className=' text-sm xs:text-lg font-medium text-[#333] sm:text-xl xl:text-2xl'>
            Smart home dashboard
          </p>
        </article>

        {/*UI & UX Card  */}
        <article className='mb-8 xl:w-max xl:pl-4'>
          <div className='mb-3 w-full rounded-2xl xl:w-[500px] xl:h-[400px] '>
            <img
              src={onboard}
              alt='onboarding application'
              className='max-w-full h-auto rounded-2xl xl:w-full xl:h-full'
            />
          </div>
          <p className='text-[10px] xs:text-xs font-light text-[#828282] sm:text-sm'>
            UX/UI design
          </p>
          <p className='text-sm xs:text-lg font-medium text-[#333] sm:text-xl xl:text-2xl'>
            Onboard application
          </p>
        </article>

        {/* Mobile Application */}
        <article className='mb-8 xl:mt-28 xl:w-max'>
          <div className='mb-3 w-full rounded-2xl xl:w-[500px] xl:h-[400px]'>
            <img
              src={booking}
              alt='booking'
              className='max-w-full h-auto rounded-2xl xl:w-full xl:h-full'
            />
          </div>
          <p className='text-[10px] xs:text-xs font-light text-[#828282] sm:text-sm'>
            Mobile application
          </p>
          <p className='text-sm xs:text-lg font-medium text-[#333] sm:text-xl xl:text-2xl'>
            Booking system
          </p>
        </article>

        {/* Front End Card */}
        <article className='xl:w-max xl:pl-4'>
          <div className='mb-3 bg-yellow-400 overflow-hidden rounded-2xl xl:w-[500px] xl:h-[400px]'>
            <img
              src={product}
              alt='juice product'
              className='-skew-y-12 max-w-full h-auto rounded-2xl xl:w-full xl:h-full'
            />
          </div>
          <p className='text-[10px] xs:text-xs font-light text-[#828282] sm:text-sm'>
            Front End application
          </p>
          <p className='text-sm xs:text-lg font-medium text-[#333] sm:text-xl xl:text-2xl'>
            Juice product homepage
          </p>
        </article>
      </div>
      <button className='flex justify-start text-blue-500 items-center text-lg font-medium xl:col-span-2 xl:self-end xl:pr-28 xxl:pr-40'>
        See more <FaLongArrowAltRight className='ml-4' />
      </button>
    </div>
  );
};

export default Features;
