import React from "react";

const Contact = () => {
  return (
    <form className='mt-8 block text-left lg:mt-3'>
      <label
        id='email'
        className='text-[0.625rem] leading-4 text-[#828282] font-medium block text-left lg:mb-2 lg:text-sm lg:text-[#f2f2f2]'
      >
        Want us to contact you?
      </label>
      <div className='w-full bg-[#F2F2F2] rounded-xl p-1 h-[47px] flex justify-between items-center'>
        <span className='pl-2'>
          <input
            type='email'
            id='email'
            placeholder='Email'
            className='w-4/5 bg-transparent text-sm font-medium leading-5'
          />
        </span>
        <span className='w-1/3'>
          <button
            type='submit'
            className='rounded-xl bg-blue-400 w-full h-[39px] text-white'
          >
            Join
          </button>
        </span>
      </div>
    </form>
  );
};

export default Contact;
