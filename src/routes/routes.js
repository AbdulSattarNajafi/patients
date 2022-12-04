import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import SignUpCompany from '../screens/SignUpCompany';

import Home from '../screens/Home';
import Companies from '../screens/Companies';
import Patients from '../screens/Patients';
import Story from '../screens/Story';
import Contact from '../screens/Contact';

import Settings from '../screens/Settings';
import ReadeMore from '../screens/ReadeMore';

export const authRoutes = [
    {
        path: 'login',
        name: 'Login',
        component: Login,
    },
    {
        path: 'sign-up',
        name: 'Sign-up',
        component: SignUp,
    },
    {
        path: 'sign-up-company',
        name: 'Sign-up-company',
        component: SignUpCompany,
    },
];

export const requireAuthRoutes = [
    {
        path: 'settings',
        name: 'Settings',
        component: Settings,
    },
    {
        path: 'home/:id',
        name: 'ReadMode',
        component: ReadeMore,
    },
];

export const routes = [
    {
        path: 'home',
        name: 'Home',
        component: Home,
    },
    {
        path: 'companies',
        name: 'Companies',
        component: Companies,
    },
    {
        path: 'patients',
        name: 'Patients',
        component: Patients,
    },
    {
        path: 'story',
        name: 'Story',
        component: Story,
    },
    {
        path: 'contact',
        name: 'Contact',
        component: Contact,
    },
];
