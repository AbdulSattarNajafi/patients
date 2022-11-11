import React from "react";

const HeroSection = ({
  headingText,
  description,
  image,
  buttons,
  primaryBtn,
  secondaryBtn,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <section className='relative'>
      <img
        src={image}
        alt='Hero Image'
        className='w-screen'
      />
      <div className='hidden sm:block absolute inset-0'>
        <div className='container h-full flex flex-col justify-center'>
          <div className='w-9/12 xl:w-3/5 '>
            <h1 className='text-white font-bold capitalize text-4xl leading-none mb-4 md:text-5xl lg:text-6xl lg:leading-tight xl:text-7xl'>
              {headingText}
            </h1>
            <p className='max-w-[570px] text-white text-lg  opacity-70 lg:text-xl xl:text-[24px] xl:leading-9'>
              {description}
            </p>

            {buttons && (
              <div className='flex items-center space-x-4 mt-8 lg:mt-10 xl:mt-16'>
                <button
                  className='btn btn-primary'
                  onClick={onPrimaryClick}>
                  {primaryBtn}
                </button>
                {buttons === 2 && (
                  <button
                    className='btn btn-secondary'
                    onClick={onSecondaryClick}>
                    {secondaryBtn}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
