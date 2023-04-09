import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './store/auth-context';
import { CreateUsersContextProvider } from './store/create-users-context';
import { GetUserProvider } from './store/getusers-context';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthContextProvider>
            <CreateUsersContextProvider>
                <GetUserProvider>
                    <App />
                </GetUserProvider>
            </CreateUsersContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
