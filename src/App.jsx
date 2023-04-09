import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './theme/Layout';
import NotFound from './screens/NotFound';
import Home from './screens/Home';
import Companies from './screens/Companies';
import Patients from './screens/Patients';
import Story from './screens/Story';
import Contact from './screens/Contact';

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import SignUpCompany from './screens/SignUpCompany';

import ReadMore from './screens/ReadMore';
import RequireAuth from './theme/RequireAuth';
import Settings from './screens/Settings';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '',
                children: [
                    { index: true, element: <Home /> },
                    { path: '/:articleId', element: <ReadMore /> },
                ],
            },
            {
                path: 'companies',
                children: [
                    { index: true, element: <Companies /> },
                    {
                        path: ':articleId',
                        element: <ReadMore />,
                    },
                ],
            },
            {
                path: 'patients',
                children: [
                    { index: true, element: <Patients /> },
                    { path: ':articleId', element: <ReadMore /> },
                ],
            },
            {
                path: 'story',
                children: [
                    { index: true, element: <Story /> },
                    { path: ':articleId', element: <ReadMore /> },
                ],
            },

            { path: 'contact', element: <Contact /> },
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/sign-up-company', element: <SignUpCompany /> },
    { path: 'settings', element: <RequireAuth />, children: [{ path: '', element: <Settings /> }] },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
