import React from "react";
import GetStartedSection from "./GetStartedCard";

const Discover = ({
  title,
  buttonText,
  getStartedHandler,
}) => {
  return (
    <GetStartedSection>
      <div className='flex flex-col items-center justify-center py-8 md:py-16 lg:py-20 xl:py-28'>
        <h2 className='max-w-4xl text-center text-2xl leading-normal text-white font-bold md:text-3xl lg:text-4xl xl:leading-[84px] xl:text-6xl'>
          {title}
        </h2>
        <div className='flex items-center space-x-4 mt-8 xl:mt-[60px]'>
          <button
            className='btn btn-primary'
            onClick={getStartedHandler}>
            {buttonText}
          </button>
        </div>
      </div>
    </GetStartedSection>
  );
};

export default Discover;
