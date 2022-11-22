import React from "react";
import { Link } from "react-router-dom";

import Logo from "./../assets/images/logo.svg";

const LoginRegister = ({
  image,
  title,
  description,
  children,
  page,
  onSubmit,
}) => {
  return (
    <div className='relative h-screen flex flex-col'>
      <div className='absolute inset-0 flex w-full'>
        <div className='w-full lg:w-3/5 xl:w-6/12'></div>
        <div className='hidden lg:block lg:w-2/5 xl:w-6/12'>
          <img
            src={image}
            alt=''
            className='h-full w-full object-cover'
          />
        </div>
      </div>

      <div className='container relative z-10 flex justify-between items-center py-4 lg:py-6'>
        <div className='w-[100px] lg:w-[120px] xl:w-[140px]'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='flex items-center space-x-4'>
          {page === "sign-up" && (
            <Link className='btn btn-primary' to={"/login"}>
              Login
            </Link>
          )}
          {page === "login" && (
            <Link
              className='btn btn-primary'
              to={"/signup"}>
              Sign Up
            </Link>
          )}
        </div>
      </div>

      <div className='relative z-20 container flex-1 flex lg:space-x-32'>
        <div className='w-full py-8 lg:py-0 lg:w-3/5 xl:w-1/2 flex flex-col justify-center'>
          <h3 className='font-bold text-3xl text-primaryBlue md:text-4xl xl:text-5xl'>
            {title}
          </h3>
          <p className='text-base text-[#6D728E] mt-[18px] opacity-70 lg:text-xl'>
            {description}
          </p>

          <form onSubmit={onSubmit} className='w-full mt-9'>
            {children}
          </form>
        </div>
        <div className='hidden lg:block lg:w-2/5 xl:w-1/2'></div>
      </div>
    </div>
  );
};

export default LoginRegister;
