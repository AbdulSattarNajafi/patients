import React, { useState } from 'react';

import { registerCompanyPage } from '../constants';
import LoginRegister from '../components/LoginRegister';
import Input from '../components/Input';
import Select from '../components/Select';
import { useCreateUser } from '../hooks';

const SignUpCompany = () => {
    const { createUser } = useCreateUser();
    const [isLoading, setIsLoading] = useState(false);

    const { image, title, description, options } = registerCompanyPage;
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        role: '',
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState({});
    const [formError, setFormError] = useState(null);

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        const updatedValues = { ...formValues, [name]: value };

        setFormValues(updatedValues);
        setErrorMessage(validateForm(updatedValues));
    };

    const validateForm = (formData) => {
        const validName = /^[a-zA-Z ]+$/;
        const validEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const errors = {};

        if (!formData.firstName) {
            errors.firstName = 'First name is required';
        } else if (!validName.test(formData.firstName) || formData.firstName.length < 4) {
            errors.firstName = 'Invalid first name';
        }

        if (!formData.lastName) {
            errors.lastName = 'last name is required';
        } else if (!validName.test(formData.lastName) || formData.lastName.length < 4) {
            errors.lastName = 'Invalid last name';
        }

        if (!formData.companyName) {
            errors.companyName = 'Company name is required';
        } else if (!validName.test(formData.companyName) || formData.companyName.length < 4) {
            errors.companyName = 'Invalid company name';
        }

        if (!formData.role) {
            errors.role = 'Role is required';
        }

        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!formData.email.match(validEmail)) {
            errors.email = 'Invalid email';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length > 7) {
            errors.password = 'Passwor must be at least 7 characters';
        }

        return errors;
    };

    const submitHandler = (e) => {
        e.preventDefault();

        setErrorMessage(validateForm(formValues));

        if (Object.keys(errorMessage).length > 0) {
            return;
        }

        setIsLoading(true);

        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCscwFPlTqmbK8LUajTdk8ZzRVrbxq58ak',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: formValues.email,
                    password: formValues.password,
                    displayName: formValues.companyName,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        // Show error
                        throw Error(data.error.message);
                    });
                }
            })
            .then((data) => {
                setFormError(null);
                createUser({ ...register, id: data.localId, password: '', image: '' });
            })
            .catch((error) => {
                if (error.message === 'EMAIL_EXISTS') {
                    setFormError('Email exists');
                } else {
                    setFormError('Something went wron please try again late.');
                }
            })
            .finally(() => {
                setIsLoading(false);
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
                    label='First Name'
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    required={true}
                    value={formValues.firstName}
                    onChange={inputChangeHandler}
                    isValid={!!errorMessage.firstName}
                />
                <Input
                    id='last-name'
                    label='Last Name'
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    required={true}
                    value={formValues.lastName}
                    onChange={inputChangeHandler}
                    isValid={!!errorMessage.lastName}
                />
            </div>
            <div className='flex flex-col items-center sm:flex-row sm:space-x-4'>
                <Input
                    id='company'
                    label='Company'
                    name='companyName'
                    type='text'
                    placeholder='Company'
                    required={true}
                    value={formValues.companyName}
                    onChange={inputChangeHandler}
                    isValid={!!errorMessage.companyName}
                />
                <Select
                    id='role'
                    label='Role'
                    name='role'
                    required={true}
                    options={options}
                    value={formValues.role}
                    onChange={inputChangeHandler}
                    isValid={!!errorMessage.role}
                />
            </div>
            <Input
                id='email'
                name='email'
                label='Email'
                type='email'
                placeholder='Email'
                required={true}
                value={formValues.email}
                onChange={inputChangeHandler}
                isValid={!!errorMessage.email}
            />
            <Input
                id='password'
                label='Password'
                name='password'
                type='password'
                required={true}
                placeholder='Password'
                value={formValues.password}
                onChange={inputChangeHandler}
                isValid={!!errorMessage.password}
            />

            <div className='pt-6 flex items-center justify-between'>
                <button className='btn btn-primary'>
                    {isLoading ? 'Loading...' : 'Sign Up now'}
                </button>
                {!isLoading && formError && <p className='text-red-400'>{formError}</p>}
            </div>
        </LoginRegister>
    );
};

export default SignUpCompany;
