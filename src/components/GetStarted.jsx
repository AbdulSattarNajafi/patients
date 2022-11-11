import React from "react";
import GetStartedSection from "./GetStartedCard";
import HomeGetStarted from "./../assets/images/home-get-started.png";

const GetStarted = ({
  patientsHandler,
  companiesHandler,
}) => {
  return (
    <GetStartedSection>
      <div className='flex items-center py-8 md:py-16 lg:py-20 xl:pl-[82px] xl:pr-[151px] xl:py-4 space-x-4'>
        <div className='flex-1'>
          <h2 className='text-center text-2xl leading-normal text-white font-bold md:text-3xl lg:text-4xl xl:leading-[84px] xl:text-7xl xl:text-left'>
            Ready to Get Started?
          </h2>
          <div className='flex flex-col space-y-4 items-center justify-center sm:flex-row sm:space-y-0 sm:space-x-4 mt-8 xl:mt-[60px] xl:justify-start'>
            <button
              className='btn btn-primary'
              onClick={patientsHandler}>
              for patients
            </button>
            <button
              className='btn btn-secondary'
              onClick={companiesHandler}>
              for companies
            </button>
          </div>
        </div>
        <div className='hidden xl:block relative w-[470px] h-[470px] rounded-full bg-[#448DC9]'>
          <img
            src={HomeGetStarted}
            alt=''
            className='absolute -bottom-4'
          />
        </div>
      </div>
    </GetStartedSection>
  );
};

export default GetStarted;
