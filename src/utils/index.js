// Calculate Remaining time
export const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const timeDuration = new Date(expirationTime).getTime();

    const remainingDuration = timeDuration - currentTime;
    return remainingDuration;
};

export const getCurrentUser = (users) => {
    const userId = localStorage.getItem('ID');
    return users.filter((user) => user.id === userId);
};

export const validateEmail = (value) => {
    const validEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return value.trim().match(validEmail);
};
