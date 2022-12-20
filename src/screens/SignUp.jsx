import React, { useState } from 'react';

import { registerPage } from '../constants';
import { useAuth, useCreateUser } from '../hooks';
import LoginRegister from '../components/LoginRegister';
import Input from '../components/Input';
import Select from '../components/Select';

const SignUp = () => {
    const { image, title, description, options } = registerPage;
    const [isLoading, setIsLoading] = useState(false);
    const { createUser } = useCreateUser();

    const [register, setRegister] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        affiliate: '',
        description: '',
    });
    const [error, setError] = useState({});
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        const updatedFormValues = { ...register, [name]: value };
        setRegister(updatedFormValues);
        setError(validate(updatedFormValues));
    };

    const validate = (formValues) => {
        const errors = {};
        const validName = /^[a-zA-Z ]+$/;
        const validEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!formValues.firstName) {
            errors.firstName = 'Name is required';
        } else if (!validName.test(formValues.firstName) || formValues.firstName.length < 4) {
            errors.firstName = 'Invalid Name';
        }

        if (!formValues.lastName) {
            errors.lastName = 'Last name is required';
        } else if (!validName.test(formValues.lastName) || formValues.lastName.length < 4) {
            errors.lastName = 'Invalid last name';
        }
        if (!formValues.userName) {
            errors.userName = 'User Name is required';
        } else if (!validName.test(formValues.userName) || formValues.userName.length < 4) {
            errors.userName = 'Invalid user name';
        }
        if (!formValues.email) {
            errors.email = 'Email is rquired';
        } else if (!formValues.email.match(validEmail)) {
            errors.email = 'Invalid email';
        }
        if (!formValues.password) {
            errors.password = 'Password is tequired';
        } else if (formValues.password.length < 7) {
            errors.password = 'Password must be at least 7 characters';
        }

        if (!formValues.affiliate) {
            errors.affiliate = 'Please select an Affiliate user name';
        }

        return errors;
    };

    const submitHandler = (e) => {
        e.preventDefault();

        setError(validate(register));

        // If any error prevent from Submiting
        if (Object.keys(error).length > 0) {
            return;
        }

        setIsLoading(true);
        setSuccessMessage(null);
        setErrorMessage(null);
        // API Request
        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCscwFPlTqmbK8LUajTdk8ZzRVrbxq58ak',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: register.email,
                    password: register.password,
                    displayName: register.userName,
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
                        // Show error
                        throw new Error('Something went wrong!');
                    });
                }
            })
            .then((data) => {
                setSuccessMessage('success');
                console.log(data.localId);
                createUser({ ...register, id: data.localId, password: '', image:'' });
            })
            .catch((err) => {
                setErrorMessage(err.message);
            });
    };

    return (
        <LoginRegister
            image={image}
            title={title}
            description={description}
            page='sign-up'
            onSubmit={submitHandler}
        >
            <div className='flex flex-col items-center sm:flex-row sm:space-x-4'>
                <Input
                    id='first-name'
                    name='firstName'
                    label='First Names'
                    type='text'
                    placeholder='First Name'
                    required={true}
                    onChange={inputHandler}
                    isValid={!!error.firstName}
                    value={register.firstName}
                />
                <Input
                    id='last-name'
                    name='lastName'
                    label='Last Name'
                    type='text'
                    placeholder='Last Name'
                    required={true}
                    onChange={inputHandler}
                    isValid={error.lastName}
                    value={register.lastName}
                />
            </div>
            <div className='flex flex-col items-center sm:flex-row sm:space-x-4'>
                <Input
                    id='user-name'
                    name='userName'
                    label='User Name'
                    type='text'
                    placeholder='User Name'
                    required={true}
                    onChange={inputHandler}
                    isValid={error.userName}
                    value={register.userName}
                />
                <Input
                    id='email'
                    name='email'
                    label='Email'
                    type='text'
                    placeholder='Email'
                    required={true}
                    onChange={inputHandler}
                    isValid={error.email}
                    value={register.email}
                />
            </div>
            <Input
                id='password'
                name='password'
                label='Password'
                type='password'
                required={true}
                placeholder='Password'
                onChange={inputHandler}
                isValid={error.password}
                value={register.password}
            />

            <div className='flex flex-col sm:flex-row sm:items-end sm:space-x-4'>
                <div className='w-full sm:w-1/3'>
                    <Select
                        id='affiliate'
                        name='affiliate'
                        label='Affiliate Username'
                        required={true}
                        options={options}
                        onChange={inputHandler}
                        isValid={error.affiliate}
                        value={register.affiliate}
                    />
                </div>
                <div className='w-full sm:w-2/3'>
                    <Input
                        id='afiliate'
                        name='description'
                        required={false}
                        label=''
                        type='text'
                        placeholder='Type Here'
                        onChange={inputHandler}
                        value={register.description}
                    />
                </div>
            </div>

            <div className='pt-6 flex justify-between items-center'>
                <button type='submit' className='btn btn-primary'>
                    {isLoading ? 'Loading...' : 'Sign Up now'}
                </button>
                {!isLoading && !successMessage && <p className='text-red-600'>{errorMessage}</p>}
                {!isLoading && !errorMessage && <p className='text-green-600'>{successMessage}</p>}
            </div>
        </LoginRegister>
    );
};

export default SignUp;
