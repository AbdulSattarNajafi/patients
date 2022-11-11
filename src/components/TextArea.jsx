import React from "react";

const TextArea = ({
  id,
  label,
  required,
  name,
  placeholder,
  onChange,
}) => {
  return (
    <div className='w-full flex flex-col'>
      <label
        htmlFor={id}
        className='block text-base text-primaryBlue mb-2 md:text-xl lg:text-[20px] lg:leading-7'>
        {label}
        {required && (
          <span className='text-[#448DC9]'> *</span>
        )}
      </label>
      <textarea
        className={`border border-[#E5E5E5] rounded text-base text-[#6D728E] px-4 py-2 focus:outline-none w-full min-h-[120px] resize-y lg:px-6 lg:py-3 lg:text-[18px] lg:leading-[26px]`}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}></textarea>
    </div>
  );
};

export default TextArea;
