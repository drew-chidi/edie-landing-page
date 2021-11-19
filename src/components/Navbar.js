import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navToggleHandler = () => {
    setOpen(!open);
  };
  console.log(open);
  return (
    <div>
      <div className='flex pt-5 justify-between w-full'>
        <h1 className='text-2xl font-extrabold'>Edie</h1>
        <ul
          className={`${
            open ? "fixed z-10 top-0 left-0 bg-gray-300" : "hidden"
          } lg:bg-transparent h-full w-3/5 pt-12 lg:pt-0 lg:static lg:flex justify-end lg:w-full font-medium`}
        >
          <li className='mx-8'>
            <a
              href='#home'
              alt='Homepage'
              className='text-lg leading-8 lg:text-2xl xl:leading-9'
            >
              Home
            </a>
          </li>
          <li className='mx-8'>
            <a
              href='#services'
              alt='Homepage'
              className='text-lg leading-8 lg:text-2xl xl:leading-9'
            >
              Services
            </a>
          </li>
          <li className='mx-8'>
            <a
              href='#home'
              alt='Homepage'
              className='text-lg leading-8 lg:text-2xl xl:leading-9'
            >
              Our Work
            </a>
          </li>
          <li className='mx-8'>
            <a
              href='#home'
              alt='Homepage'
              className='text-lg leading-8 lg:text-2xl xl:leading-9'
            >
              Client
            </a>
          </li>
          <li className='mx-8'>
            <a
              href='#home'
              alt='Homepage'
              className='text-lg leading-8 lg:text-2xl xl:leading-9'
            >
              Contact
            </a>
          </li>
        </ul>
        <div className='lg:hidden flex w-full justify-end items-center'>
          <AiOutlineMenu
            onClick={navToggleHandler}
            className='w-4 h-3.5 text-black font-bold'
          />
        </div>
        <nav></nav>
      </div>
    </div>
  );
};

export default Navbar;
