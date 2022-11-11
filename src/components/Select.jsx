import React from "react";

const Select = ({
  id,
  label,
  required,
  options,
  onChange,
}) => {
  return (
    <div className='w-full flex flex-col mb-6'>
      <label
        htmlFor={id}
        className='block text-base text-primaryBlue mb-2 md:text-xl lg:text-[20px] lg:leading-7'>
        {label}
        {required && (
          <span className='text-[#448DC9]'> *</span>
        )}
      </label>
      <select
        className='border border-[#E5E5E5] rounded text-base text-[#6D728E] px-4 py-2 focus:outline-none w-full lg:px-6 lg:py-3 lg:text-[18px] lg:leading-[26px]'
        id={id}
        name={id}
        onChange={onChange}>
        {options.map((item, i) => {
          return (
            <option key={i} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
