import React from 'react';

const Select = ({
    id,
    label,
    required,
    options,
    onChange,
    onBlur,
    isValid,
    name,
    value,
    errorMessage,
}) => {
    return (
        <div className='w-full flex flex-col mb-2'>
            <label
                htmlFor={id}
                className='block text-base text-primaryBlue mb-2 md:text-xl lg:text-[20px] lg:leading-7'
            >
                {label}
                {required && <span className='text-[#448DC9]'> *</span>}
            </label>
            <select
                className={`border ${
                    isValid ? 'border-red-300' : 'border-[#e5e5e5]'
                } rounded text-base text-[#6D728E] px-4 py-2 focus:outline-none w-full lg:px-6 lg:py-3 lg:text-[18px] lg:leading-[26px]`}
                id={id}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            >
                {options.map((item, i) => {
                    return (
                        <option key={i} value={item.value}>
                            {item.label}
                        </option>
                    );
                })}
            </select>
            <p className='text-sm h-5 text-red-400 m-1'>{errorMessage}</p>
        </div>
    );
};

export default Select;
