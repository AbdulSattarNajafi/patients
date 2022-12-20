import { createContext } from 'react';

const CreateUsersContext = createContext({
    createUser: (userData) => {},
});

export const CreateUsersContextProvider = ({ children }) => {
    const createUserHandler = (userData) => {
        fetch(
            'https://patients-ca58c-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
            {
                method: 'POST',
                body: JSON.stringify(userData),
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
            .then((data) => {})
            .catch((error) => {
                console.log(error);
            });
    };

    const usersValue = {
        createUser: createUserHandler,
    };

    return <CreateUsersContext.Provider value={usersValue}>{children}</CreateUsersContext.Provider>;
};

export default CreateUsersContext;
