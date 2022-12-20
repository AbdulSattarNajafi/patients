import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import SignUpCompany from '../screens/SignUpCompany';

import Companies from '../screens/Companies';
import Patients from '../screens/Patients';
import Story from '../screens/Story';
import Contact from '../screens/Contact';

import Settings from '../screens/Settings';
import HomeReadeMore from '../screens/HomeReadeMore';
import CompaniesReadMore from '../screens/CompaniesReadMore';
import PatientsReadMore from '../screens/PatientsReadMore';
import StoryReadMore from '../screens/StoryReadMore';

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
        path: '/:articleId',
        name: 'ReadMode',
        component: HomeReadeMore,
    },
    {
        path: 'companies/:articleId',
        name: 'CompaniesReadMore',
        component: CompaniesReadMore,
    },
    {
        path: 'patients/:articleId',
        name: 'PatientsReadMore',
        component: PatientsReadMore,
    },
    {
        path: 'story/:articleId',
        name: 'StoryReadMore',
        component: StoryReadMore,
    },
];

export const routes = [
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
