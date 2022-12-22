import React, { useState, useRef, useContext } from 'react';

import Input from '../components/Input';
import { useAuth, useCreateUser, useGetUser } from '../hooks';
import { getCurrentUser } from '../utils';
import CreateUsersContext from '../store/create-users-context';

const Settings = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const { users } = useGetUser();
    const userId = localStorage.getItem('ID');
    const [currentUser] = users.filter((user) => user.id === userId);
    const [formValues, setFormValues] = useState({
        firstName: currentUser?.firstName,
        lastName: currentUser?.lastName,
        userName: currentUser?.userName,
        email: currentUser?.email,
        affiliate: currentUser?.affiliateName,
        description: currentUser?.affiliateDescription,
        image: currentUser?.image,
    });
    const [file, setFile] = useState(null);

    const createUserCtx = useContext(CreateUsersContext);

    const fileInputRef = useRef();

    const imageChangeHandler = (e) => {
        setImageUrl(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
    };

    const uploadImageBtnHandler = () => {
        fileInputRef?.current.click();
    };

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;

        setFormValues({ ...formValues, [name]: value });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        createUserCtx.createUser({ ...formValues });
    };

    const deleteAccountHandler = (e) => {
        e.preventDefault();
        console.log(typeof currentUser.id);
        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyCscwFPlTqmbK8LUajTdk8ZzRVrbxq58ak',
            {
                method: 'POST',
                body: JSON.stringify({
                    idToken: currentUser.id,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((res) => {
                console.log(res);
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className='container py-8 lg:py-16'>
                <h3 className='text-primaryBlue text-center font-bold text-3xl md:text-4xl lg:leading-[60px] lg:text-5xl'>
                    Account Settings
                </h3>
                <form
                    onSubmit={submitHandler}
                    className='relative flex flex-wrap border border-gray-300 rounded-lg p-2 pb-16 sm:p-4 sm:pb-16 mt-8 lg:mt-12 lg:pb-4'
                >
                    <div className='flex flex-col w-full p-2 sm-p-4 lg:w-1/3'>
                        <p className='text-base text-primaryBlue mb-2 md:text-xl lg:text-[20px] lg:leading-7'>
                            Profile Picutre
                        </p>
                        <div className='relative flex items-center justify-center overflow-hidden w-full h-[275px] border border-gray-300 rounded-lg bg-gray-300'>
                            {!imageUrl && (
                                <p className='max-w-[60%] text-base text-primaryBlue text-center'>
                                    Drag and drop an image or upload below
                                </p>
                            )}
                            {imageUrl && (
                                <img
                                    src={imageUrl}
                                    alt='Profile picture'
                                    className='w-full h-full object-cover'
                                />
                            )}
                            <input
                                type='file'
                                accept='image/*'
                                className='absolute inset-0 opacity-0 z-10'
                                onChange={imageChangeHandler}
                                ref={fileInputRef}
                            />
                        </div>
                        <div className='flex justify-center mt-8'>
                            <button
                                type='button'
                                className='btn btn-primary'
                                onClick={uploadImageBtnHandler}
                            >
                                Upload image
                            </button>
                        </div>
                    </div>

                    <div className='flex-col p-2 pb-0 w-full sm:p-4 sm:pb-0 md:w-1/2 md:p-4 lg:w-1/3'>
                        <Input
                            label='First Name'
                            name='firstName'
                            value={formValues.firstName}
                            onChange={inputChangeHandler}
                        />
                        <Input
                            label='Last Name'
                            name='lastName'
                            value={formValues.lastName}
                            onChange={inputChangeHandler}
                        />
                        <Input
                            label='User Name'
                            name='userName'
                            value={formValues.userName}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <div className='flex-col p-2 pt-0 w-full sm:p-4 sm:pt-0 md:w-1/2 md:p-4 lg:w-1/3'>
                        <Input
                            label='Email'
                            name='email'
                            value={formValues.email}
                            onChange={inputChangeHandler}
                        />
                        <Input
                            label='Affiliate Username'
                            name='affiliate'
                            value={formValues.affiliate}
                            onChange={inputChangeHandler}
                        />
                        <Input
                            label='Affiliate Description'
                            name='description'
                            value={formValues.description}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <div className='absolute right-8 bottom-8 flex items-center space-x-6'>
                        <button type='button' className='btn btn-primary-outline'>
                            Cancel
                        </button>
                        <button type='submit' className='btn btn-primary'>
                            Save
                        </button>
                    </div>
                </form>
                <div className='flex flex-col justify-between items-center border border-gray-300 rounded-lg px-4 py-3 mt-8 sm:flex-row'>
                    <p className='text-red-600 mb-2 sm:mb-0'>All data will be lost.</p>
                    <button className='btn bg-red-400' onClick={deleteAccountHandler}>
                        Delete Account
                    </button>
                </div>
            </div>
        </>
    );
};

export default Settings;
