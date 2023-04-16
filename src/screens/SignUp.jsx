import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { registerPage } from '../constants';
import { useCreateUser } from '../hooks';
import LoginRegister from '../components/LoginRegister';
import Input from '../components/Input';
import Select from '../components/Select';

import useValidate from './../hooks/useValidate';
import { validateEmail } from '../utils';

const SignUp = () => {
    const { createUser } = useCreateUser();
    const navigate = useNavigate();

    const { image, title, description, options } = registerPage;
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const {
        value: enteredFirstName,
        isValid: isEnteredFirstNameValid,
        hasError: enteredFirstNameHasError,
        onChange: firstNameChange,
        onBlur: firstNameBlur,
        reset: firstNameResetHandler,
    } = useValidate((value) => value.trim().length > 3);

    const {
        value: enteredLastName,
        isValid: isEnteredLastNameValid,
        hasError: enteredLastNameHasError,
        onChange: lastNameChange,
        onBlur: lastNameBlur,
        reset: lastNameResetHandler,
    } = useValidate((value) => value.trim().length > 3);

    const {
        value: enteredUserName,
        isValid: isEnteredUserNameValid,
        hasError: enteredUserNameHasError,
        onChange: userNameChange,
        onBlur: userNameBlur,
        reset: userNameResetHandler,
    } = useValidate((value) => value.trim().length > 3);

    const {
        value: enteredEmail,
        isValid: isEnteredEmailValid,
        hasError: enteredEmailHasError,
        onChange: emailChange,
        onBlur: emailBlur,
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

    const {
        value: selectedAffiliate,
        isValid: isAffiliatelValid,
        hasError: affiliateHasError,
        onChange: affiliateChange,
        onBlur: affiliateBlurHandler,
        reset: affiliateResetHandler,
    } = useValidate((value) => value.trim() !== '');

    const { value: enteredAffiliateName, onChange: affiliateNameChange } = useValidate(() => true);

    let isFormValid = false;

    if (
        isEnteredFirstNameValid &&
        isEnteredLastNameValid &&
        isEnteredUserNameValid &&
        isEnteredEmailValid &&
        isPasswordlValid &&
        isAffiliatelValid
    ) {
        isFormValid = true;
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        // If any error prevent from Submiting
        if (!isFormValid) {
            return;
        }

        setIsLoading(true);
        setSuccessMessage(null);
        setErrorMessage(null);

        try {
            const response = await fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCscwFPlTqmbK8LUajTdk8ZzRVrbxq58ak',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: enteredEmail,
                        password: enteredPassword,
                        displayName: enteredUserName,
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
            setSuccessMessage('success');

            createUser({
                affiliate: selectedAffiliate,
                description: enteredAffiliateName,
                email: enteredEmail,
                firstName: enteredFirstName,
                lasstName: enteredLastName,
                userName: enteredUserName,
                password: enteredPassword,
                id: data.localId,
                image: '',
            });
            navigate('/login', { replace: true });
        } catch (err) {
            setErrorMessage(err.message);
        }

        setIsLoading(false);
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
                    onChange={firstNameChange}
                    onBlur={firstNameBlur}
                    isValid={enteredFirstNameHasError}
                    value={enteredFirstName}
                />
                <Input
                    id='last-name'
                    name='lastName'
                    label='Last Name'
                    type='text'
                    placeholder='Last Name'
                    required={true}
                    onChange={lastNameChange}
                    onBlur={lastNameBlur}
                    isValid={enteredLastNameHasError}
                    value={enteredLastName}
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
                    onChange={userNameChange}
                    onBlur={userNameBlur}
                    isValid={enteredUserNameHasError}
                    value={enteredUserName}
                />
                <Input
                    id='email'
                    name='email'
                    label='Email'
                    type='text'
                    placeholder='Email'
                    required={true}
                    onChange={emailChange}
                    onBlur={emailBlur}
                    isValid={enteredEmailHasError}
                    value={enteredEmail}
                />
            </div>
            <Input
                id='password'
                name='password'
                label='Password'
                type='password'
                required={true}
                placeholder='Password'
                onChange={passwordChange}
                onBlur={passwordBlurHandler}
                isValid={passwordHasError}
                value={enteredPassword}
            />

            <div className='flex flex-col sm:flex-row sm:items-end sm:space-x-4'>
                <div className='w-full sm:w-2/5'>
                    <Select
                        id='affiliate'
                        name='affiliate'
                        label='Affiliate Username'
                        required={true}
                        options={options}
                        onChange={affiliateChange}
                        onBlur={affiliateBlurHandler}
                        isValid={affiliateHasError}
                        value={selectedAffiliate}
                    />
                </div>
                <div className='w-full sm:w-3/5'>
                    <Input
                        id='afiliate'
                        name='description'
                        required={false}
                        label=''
                        type='text'
                        placeholder='Type Here'
                        onChange={affiliateNameChange}
                        value={enteredAffiliateName}
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
