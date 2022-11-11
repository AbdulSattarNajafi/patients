import React from "react";
import { Link } from "react-router-dom";

import LoginRegister from "../components/LoginRegister";
import Input from "../components/Input";
import LoginBg from "./../assets/images/login-bg.png";

const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum.";

const Login = () => {
  return (
    <LoginRegister
      image={LoginBg}
      title='Login Now'
      description={description}
      page='login'>
      <Input
        id='email'
        label='Email'
        type='email'
        required={true}
        placeholder='Email'
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
          Login now
        </button>
      </div>
    </LoginRegister>
  );
};

export default Login;
