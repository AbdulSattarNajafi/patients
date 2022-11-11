import React from "react";

import LoginRegister from "../components/LoginRegister";
import Input from "../components/Input";
import Select from "../components/Select";
import SignUpBg from "./../assets/images/signup-company-bg.png";

const title = "Sign Up as Company";
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum.";
const options = [
  { label: "Role", value: "role" },
  { label: "CEO", value: "ceo" },
  { label: "Director", value: "director" },
  { label: "Manager", value: "manager" },
];

const SignUpCompany = () => {
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
          id='company'
          label='Company'
          type='text'
          placeholder='Company'
          required={true}
        />
        <Select
          id='role'
          label='Role'
          required={true}
          options={options}
        />
      </div>
      <Input
        id='email'
        label='Email'
        type='email'
        placeholder='Email'
        required={true}
      />
      <Input
        id='password'
        label='Password'
        type='password'
        required={true}
        placeholder='Password'
      />

      <div className='pt-6'>
        <button className='btn btn-primary'>
          Sign Up now
        </button>
      </div>
    </LoginRegister>
  );
};

export default SignUpCompany;
