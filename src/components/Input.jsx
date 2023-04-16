import React from 'react';

const Input = ({
    id,
    label,
    type,
    placeholder,
    required,
    onChange,
    onBlur,
    value,
    isValid,
    name,
    inputRef,
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
            <input
                className={`border ${
                    isValid ? 'border-red-300' : 'border-[#e5e5e5]'
                } rounded text-base text-[#6D728E] px-4 py-2 focus:outline-none w-full lg:px-6 lg:py-3 lg:text-[18px] lg:leading-[26px]`}
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={inputRef}
            />
            <p className='text-sm h-5 text-red-400 m-1'>{errorMessage}</p>
        </div>
    );
};

export default Input;
