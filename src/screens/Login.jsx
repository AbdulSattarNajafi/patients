import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginPage } from '../constants';
import { useAuth, useGetUser } from '../hooks';
import LoginRegister from '../components/LoginRegister';
import Input from '../components/Input';

const Login = () => {
    const { image, description } = loginPage;
    const [isLoading, setIsLoading] = useState(false);
    const [loginInputs, setLoginInputs] = useState({ email: '', password: '' });
    const [inputError, setInputError] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
    const authCtx = useAuth();
    const { getUser } = useGetUser();

    const loginChangeHandler = (e) => {
        const { name, value } = e.target;
        const updatedValues = { ...loginInputs, [name]: value };
        setLoginInputs(updatedValues);
        setInputError(validateForm(updatedValues));
    };

    const validateForm = (formValues) => {
        const errors = {};
        const validEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!formValues.email) {
            errors.email = 'Email is required';
        } else if (!formValues.email.match(validEmail)) {
            errors.email = 'Invalid email!';
        }

        if (!formValues.password) {
            errors.password = 'Passowrd is required';
        } else if (formValues.password.length < 7) {
            errors.password = 'Password must be at least 7 characters';
        }

        return errors;
    };

    const submitHandler = (e) => {
        e.preventDefault();

        setInputError(validateForm(loginInputs));
        // Validation
        if (Object.keys(inputError).length > 0) {
            return;
        }

        // API Request
        setIsLoading(true);
        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCscwFPlTqmbK8LUajTdk8ZzRVrbxq58ak',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: loginInputs.email,
                    password: loginInputs.password,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((res) => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        throw new Error(data.error.message);
                    });
                }
            })
            .then((data) => {
                const expirationTime = new Date(new Date().getTime() + +data.expiresIn * 1000);
                authCtx.login(data.idToken, expirationTime.toISOString(), data.localId);
                navigate('/', { replace: true });
                getUser();
            })
            .catch((error) => {
                const errorText =
                    error.message === 'INVALID_PASSWORD' ? 'Wrong Password' : 'Email not found';
                if (error.message === 'INVALID_PASSWORD') {
                    setInputError({ ...inputError, password: 'Wrong Password' });
                }
                if (error.message === 'EMAIL_NOT_FOUND') {
                    setInputError({ ...inputError, email: 'Email not found' });
                }
                setErrorMessage(errorText);
            });
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
                isValid={inputError.email}
                onChange={loginChangeHandler}
                value={loginInputs.email}
            />
            <Input
                id='password'
                label='Password'
                name='password'
                type='password'
                required={true}
                placeholder='Password'
                isValid={inputError.password}
                onChange={loginChangeHandler}
                value={loginInputs.password}
            />

            <div className='pt-6 flex items-center justify-between'>
                <button type='submit' className='btn btn-primary'>
                    {isLoading ? 'Logging...' : 'Login now'}
                </button>
                <p className='text-red-400'>{errorMessage}</p>
            </div>
        </LoginRegister>
    );
};

export default Login;

// localId = DUQu2sqsR2Qcxm3DsLbYFWAm9Bj2;
// localId = DUQu2sqsR2Qcxm3DsLbYFWAm9Bj2;