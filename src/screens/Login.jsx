import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../store/ auth-context";
import LoginRegister from "../components/LoginRegister";
import Input from "../components/Input";
import LoginBg from "./../assets/images/login-bg.png";

const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum.";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    // Validation

    // API Request
    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCscwFPlTqmbK8LUajTdk8ZzRVrbxq58ak",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
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
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(
          data.idToken,
          expirationTime.toISOString()
        );
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <LoginRegister
      image={LoginBg}
      title='Login Now'
      description={description}
      page='login'
      onSubmit={submitHandler}>
      <Input
        id='email'
        label='Email'
        type='text'
        required={true}
        placeholder='Email'
        inputRef={emailRef}
      />
      <Input
        id='password'
        label='Password'
        type='password'
        required={true}
        placeholder='Password'
        inputRef={passwordRef}
      />

      <div className='pt-6'>
        <button type='submit' className='btn btn-primary'>
          {isLoading ? "Logging..." : "Login now"}
        </button>
      </div>
    </LoginRegister>
  );
};

export default Login;
