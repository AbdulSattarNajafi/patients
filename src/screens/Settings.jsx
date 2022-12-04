import React from 'react';
import { useParams } from 'react-router-dom';

import { useAuth } from '../hooks';

const Settings = () => {
    const useId = useParams();
    const authCtx = useAuth();

    console.log(authCtx.token);

    console.log(useId);
    return (
        <>
            <p>Account Settings</p>
        </>
    );
};

export default Settings;
