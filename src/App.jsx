import { Routes, Route } from "react-router-dom";

import { authRoutes, routes, requireAuthRoutes } from './routes/routes';
import Layout from './theme/Layout';
import RequireAuth from './theme/RequireAuth';
import Home from './screens/Home';
import NotFound from './screens/NotFound';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                {routes.map((route) => (
                    <Route key={route.name} path={route.path} element={<route.component />} />
                ))}
            </Route>
            <Route element={<RequireAuth />}>
                <Route path='/' element={<Layout />}>
                    {requireAuthRoutes.map((route) => (
                        <Route key={route.name} path={route.path} element={<route.component />} />
                    ))}
                </Route>
            </Route>
            {authRoutes.map((route) => (
                <Route key={route.name} path={route.path} element={<route.component />} />
            ))}
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default App;
