import React, { useState, createContext, useEffect, useCallback } from 'react';

import { calculateRemainingTime } from '../utils';

let logoutTimer;

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime < 60000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('ID');
        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime,
    };
};

export const AuthContextProvider = ({ children }) => {
    const tokenData = retrieveStoredToken();
    let initialToken;

    if (tokenData) {
        initialToken = tokenData.token;
    }

    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('ID');

        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    const loginHandler = (token, expirationTime, userId) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);
        localStorage.setItem('ID', userId);

        const remainingTime = calculateRemainingTime(expirationTime);

        logoutTimer = setTimeout(logoutHandler, remainingTime);
    };

    useEffect(() => {
        if (tokenData) {
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;
