import React from "react";

const TextImageSection = ({
  background,
  flex,
  image,
  title,
  FirstDescription,
  secondDescription,
}) => {
  return (
    <section className={`${background}`}>
      <div
        className={`container flex flex-col ${flex} items-center py-20 lg:py-[120px]`}>
        <div className='w-full lg:w-1/2'>
          <img
            src={image}
            alt='image'
            className='w-full rounded-2xl'
          />
        </div>
        <div className='flex flex-col justify-center w-full mt-12 ld:mt-0 lg:w-1/2 lg:px-12 xl:px-20'>
          <h3 className='text-primaryBlue font-bold text-3xl md:text-4xl lg:leading-[60px] lg:text-5xl'>
            {title}
          </h3>
          <div className='mt-6 mb-12 lg:mb-16'>
            <p>{FirstDescription}</p>
            <p className='mt-4'>{secondDescription}</p>
          </div>
          <div className=''>
            <button className='btn btn-primary'>
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextImageSection;
