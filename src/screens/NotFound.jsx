import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const gotToHomePage = () => navigate('/home', { replace: true });

    return (
        <div className='flex flex-col py-8 px-4 items-center justify-center min-h-screen'>
            <h1 className='text-6xl font-bold text-transparent bg-gradient bg-clip-text xl:text-9xl'>
                Oops!
            </h1>
            <h2 className='text-xl text-center text-primaryBlue font-bold my-4 xl:text-2xl'>
                404 - Page not Found
            </h2>
            <p className='text-center'>
                The page you are looking for might have been removed, <br />
                had it's name changed or is temporary unavailable.
            </p>
            <button className='btn btn-primary mt-4' onClick={gotToHomePage}>
                Go to Home page
            </button>
        </div>
    );
};

export default NotFound;
