import React from "react";

import LoginRegister from "../components/LoginRegister";
import Input from "../components/Input";
import Select from "../components/Select";
import SignUpBg from "./../assets/images/signup-bg.png";

const title = "Sign Up as Influencer";
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum.";
const options = [
  { label: "Instagram", value: "instagram" },
  { label: "Youtube", value: "youtube" },
  { label: "Blog", value: "blog" },
  { label: "Website", value: "website" },
];

const SignUp = () => {
  return (
    <LoginRegister
      image={SignUpBg}
      title={title}
      description={description}
      page='sign-up'>
      <div className='flex flex-col items-center sm:flex-row sm:space-x-4'>
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
      <div className='flex flex-col items-center sm:flex-row sm:space-x-4'>
        <Input
          id='user-name'
          label='User Name'
          type='text'
          placeholder='User Name'
          required={true}
        />
        <Input
          id='email'
          label='Email'
          type='email'
          placeholder='Email'
          required={true}
        />
      </div>
      <Input
        id='password'
        label='Password'
        type='password'
        required={true}
        placeholder='Password'
      />

      <div className='flex flex-col sm:flex-row sm:items-end sm:space-x-4'>
        <div className='w-full sm:w-1/3'>
          <Select
            id='affiliate'
            label='Affiliate Username'
            required={true}
            options={options}
          />
        </div>
        <div className='w-full sm:w-2/3'>
          <Input
            id='afiliate'
            required={false}
            label=''
            type='text'
            placeholder='Type Here'
          />
        </div>
      </div>

      <div className='pt-6'>
        <button className='btn btn-primary'>
          Sign Up now
        </button>
      </div>
    </LoginRegister>
  );
};

export default SignUp;
