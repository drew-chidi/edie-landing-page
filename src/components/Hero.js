import React from "react";
import kanban from "../assets/team_meeting_at_board.png";
const Hero = () => {
  return (
    <div className='mt-12 block text-left'>
      <div className='pl-7 mb-4 sm:pl-14 xl:pl-56'>
        <p className='text-xs xl:text-lg text-[#2D9CDB] '>
          Unhappy with your website?
        </p>
        <p className='text-2xl font-medium leading-9 w-3/4 sm:text-3xl sm:w-2/3 md:text-4xl xl:text-5xl xl:leading-[72px] lg:w-3/5 xl:w-1/2'>
          We create beautiful and fast web services
        </p>
      </div>
      <div className='bg-gray-800  rounded-2xl'>
        <img
          src={kanban}
          alt='hero'
          className='rounded-3xl max-w-full xl:w-full xl:h-96'
        />
      </div>
      <div className='mt-[22px] pl-7 sm:pl-14 sm:w-3/4  lg:max-w-[50%] xl:pl-56 '>
        <p className='text-2xl font-medium leading-9 w-3/5 sm:text-3xl md:text-4xl xl:text-5xl xl:leading-[72px] xl:w-2/5'>
          Story, emotion and purpose
        </p>
        <p className='mt-8 w-4/5 text-xs font-normal xl:text-lg xl:w-[85%]'>
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </p>

        <form className='mt-8 '>
          <label
            id='email'
            className='text-[0.625rem] leading-4 text-[#828282] font-medium xl:text-sm'
          >
            Want us to contact you?
          </label>
          <div className='bg-[#F2F2F2] rounded-xl p-1 w-4/5  h-[47px] flex items-center justify-between sm:w-3/4'>
            <span>
              <input
                type='email'
                id='email'
                placeholder='Email'
                className='bg-transparent text-sm font-medium leading-5 ml-5 xl:text-lg'
              />
            </span>
            <span className='w-1/4'>
              <button
                type='submit'
                className='rounded-xl bg-blue-400 w-full h-[39px] text-[#f2f2f2]'
              >
                Join
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
