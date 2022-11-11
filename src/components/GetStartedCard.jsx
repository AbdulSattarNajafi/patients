import React from "react";

const GetStartedSection = ({ children }) => {
  return (
    <section className='relative flex flex-col'>
      <div className='container max-w-[90%] rounded-3xl bg-gradient relative bottom-0 z-10 translate-y-1/2 lg:rounded-[30px] xl:rounded-[60px]'>
        {children}
      </div>
      <div className='h-[100px] md:h-[146px] xl:h-[246px] bg-gray-200'></div>
    </section>
  );
};

export default GetStartedSection;
