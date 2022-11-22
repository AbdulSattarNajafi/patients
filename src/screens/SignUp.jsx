import React, { useState, useRef, useContext } from "react";

import AuthContext from "./../store/ auth-context";
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
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const descriptionRef = useRef();

  const [afiliateValue, SetAfiliateValue] =
    useState("instagram");

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredUserName = userNameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    // Validation

    setIsLoading(true);
    // API Request
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCscwFPlTqmbK8LUajTdk8ZzRVrbxq58ak",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            // Show error
            alert(data.error.message);
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <LoginRegister
      image={SignUpBg}
      title={title}
      description={description}
      page='sign-up'
      onSubmit={submitHandler}>
      <div className='flex flex-col items-center sm:flex-row sm:space-x-4'>
        <Input
          id='first-name'
          label='First Name'
          type='text'
          placeholder='First Name'
          required={true}
          inputRef={firstNameRef}
        />
        <Input
          id='last-name'
          label='Last Name'
          type='text'
          placeholder='Last Name'
          required={true}
          inputRef={lastNameRef}
        />
      </div>
      <div className='flex flex-col items-center sm:flex-row sm:space-x-4'>
        <Input
          id='user-name'
          label='User Name'
          type='text'
          placeholder='User Name'
          required={true}
          inputRef={userNameRef}
        />
        <Input
          id='email'
          label='Email'
          type='email'
          placeholder='Email'
          required={true}
          inputRef={emailRef}
        />
      </div>
      <Input
        id='password'
        label='Password'
        type='password'
        required={true}
        placeholder='Password'
        inputRef={passwordRef}
      />

      <div className='flex flex-col sm:flex-row sm:items-end sm:space-x-4'>
        <div className='w-full sm:w-1/3'>
          <Select
            id='affiliate'
            label='Affiliate Username'
            required={true}
            options={options}
            onChange={(e) =>
              SetAfiliateValue(e.target.value)
            }
          />
        </div>
        <div className='w-full sm:w-2/3'>
          <Input
            id='afiliate'
            required={false}
            label=''
            type='text'
            placeholder='Type Here'
            inputRef={descriptionRef}
          />
        </div>
      </div>

      <div className='pt-6'>
        <button type='submit' className='btn btn-primary'>
          {isLoading ? "Loading..." : "Sign Up now"}
        </button>
      </div>
    </LoginRegister>
  );
};

export default SignUp;
