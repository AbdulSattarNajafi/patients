import { useState, useEffect, useContext } from 'react';

import AuthContext from '../store/auth-context';
import CreateUsersContext from '../store/create-users-context';
import GetUsersContext from '../store/getusers-context';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

// Auth Context
export const useAuth = () => {
    return useContext(AuthContext);
};

// Create User
export const useCreateUser = () => {
    return useContext(CreateUsersContext);
};

// Get users
export const useGetUser = () => {
    return useContext(GetUsersContext);
};
