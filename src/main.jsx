import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from './store/auth-context';
import { CreateUsersContextProvider } from './store/create-users-context';
import { GetUserProvider } from './store/getusers-context';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <CreateUsersContextProvider>
                    <GetUserProvider>
                        <App />
                    </GetUserProvider>
                </CreateUsersContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
