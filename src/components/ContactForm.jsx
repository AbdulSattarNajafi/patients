import React from "react";

import Select from "./Select";
import Input from "./Input";
import TextArea from "./TextArea";

const options = [
  { label: "Patient", value: "patient" },
  { label: "Doctor", value: "doctor" },
  { label: "Owner", value: "owner" },
];

const ContactForm = () => {
  return (
    <div>
      <h3 className='font-bold text-3xl text-primaryBlue md:text-4xl xl:text-5xl'>
        Send us Your Message
      </h3>
      <p className='text-base text-[#6D728E] mt-[18px] opacity-70 lg:text-ld'>
        Proactively envisioned multimedia based expertise
        and cross-media growth strategies. Seamlessly
        visualize quality intellectual capital.
      </p>
      <form className='w-full mt-9 '>
        <Select
          id='who'
          label='I am'
          required={true}
          options={options}
        />
        <div className='flex items-center space-x-4'>
          <Input
            id='first-name'
            label='First Name'
            type='text'
            placeholder='First Name'
            required={true}
          />
          <Input
            id='last-name'
            label='Last Name'
            type='text'
            placeholder='Last Name'
            required={true}
          />
        </div>

        <div className='flex items-center space-x-4'>
          <Input
            id='email'
            label='Email'
            type='text'
            placeholder='Email'
            required={true}
          />
          <Input
            id='company'
            label='Company'
            type='text'
            placeholder='Company'
            required={true}
          />
        </div>

        <TextArea
          id='message'
          name='message'
          placeholder='Comments'
          label='Comments'
          required={true}
        />

        <div className='mt-12'>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
