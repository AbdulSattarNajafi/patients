import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginPage } from '../constants';
import { useAuth } from '../hooks';
import LoginRegister from '../components/LoginRegister';
import Input from '../components/Input';
import useValidate from '../hooks/useValidate';
import { validateEmail } from '../utils';

const Login = () => {
    const navigate = useNavigate();
    const authCtx = useAuth();
    const { image, description } = loginPage;
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '' });

    const {
        value: enteredEmail,
        isValid: isEmailValid,
        hasError: emailHasError,
        onChange: emailChange,
        onBlur: emailBlurHandler,
        reset: emailResetHandler,
    } = useValidate(validateEmail);

    const {
        value: enteredPassword,
        isValid: isPasswordlValid,
        hasError: passwordHasError,
        onChange: passwordChange,
        onBlur: passwordBlurHandler,
        reset: passwordResetHandler,
    } = useValidate((value) => value.trim().length > 6);

    const responseValidation = (responseMessage) => {
        if (responseMessage === 'EMAIL_NOT_FOUND') {
            setErrors((prev) => {
                return { ...prev, email: 'Email not Found' };
            });
        }

        if (responseMessage === 'INVALID_PASSWORD') {
            setErrors((prev) => {
                return { ...prev, password: 'Invalid Password' };
            });
        }
    };

    const emailChangeHandler = (e) => {
        emailChange(e);
        setErrors((prev) => {
            return { ...prev, email: '' };
        });
    };

    const passwordChangeHandler = (e) => {
        passwordChange(e);
        setErrors((prev) => {
            return { ...prev, password: '' };
        });
    };

    let isFormValid = false;
    if (isEmailValid && isPasswordlValid) {
        isFormValid = true;
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        // Form Validation
        if (!isFormValid) return;

        setIsLoading(true);

        try {
            const response = await fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCscwFPlTqmbK8LUajTdk8ZzRVrbxq58ak',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: enteredEmail,
                        password: enteredPassword,
                        returnSecureToken: true,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error.message);
            }

            const data = await response.json();

            const expirationTime = new Date(new Date().getTime() + +data.expiresIn * 1000);

            authCtx.login(data.idToken, expirationTime.toISOString(), data.localId);

            emailResetHandler();
            passwordResetHandler();
            navigate('/', { replace: true });
        } catch (err) {
            responseValidation(err.message);
        }
        setIsLoading(false);
    };

    return (
        <LoginRegister
            image={image}
            title='Login Now'
            description={description}
            page='login'
            onSubmit={submitHandler}
        >
            <Input
                id='email'
                label='Email'
                name='email'
                type='text'
                required={true}
                placeholder='Email'
                isValid={emailHasError}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
                errorMessage={
                    emailHasError ? 'Please enter a vaild email1' : errors.email ? errors.email : ''
                }
            />
            <Input
                id='password'
                label='Password'
                name='password'
                type='password'
                required={true}
                placeholder='Password'
                isValid={passwordHasError}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                value={enteredPassword}
                errorMessage={
                    passwordHasError
                        ? 'Password must be at least 7 characters'
                        : errors.password
                        ? errors.password
                        : ''
                }
            />

            <div className='pt-6'>
                <button type='submit' className='btn btn-primary'>
                    {isLoading ? 'Logging...' : 'Login now'}
                </button>
            </div>
        </LoginRegister>
    );
};

export default Login;
