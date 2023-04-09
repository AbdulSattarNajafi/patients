import { createContext, useState, useEffect } from 'react';

const GetUsersConetx = createContext({
    users: [],
});

export const GetUserProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    const getUserHandler = () => {
        fetch('https://patients-ca58c-default-rtdb.asia-southeast1.firebasedatabase.app/users.json')
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
                const userData = [];

                for (const key in data) {
                    userData.push({
                        id: data[key].id,
                        firstName: data[key].firstName,
                        lastName: data[key].lastName,
                        userName: data[key].userName,
                        email: data[key].email,
                        image: data[key].image,
                        affiliateName: data[key].affiliate,
                        affiliateDescription: data[key].description,
                    });
                }

                setUser(userData);
            })
            .catch((error) => {
                // console.log(error);
            });
    };

    useEffect(() => {
        getUserHandler();
    }, []);

    const getUserValue = {
        users: user,
    };
    return <GetUsersConetx.Provider value={getUserValue}>{children}</GetUsersConetx.Provider>;
};

export default GetUsersConetx;
