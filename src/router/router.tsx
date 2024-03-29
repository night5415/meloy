import { createBrowserRouter } from "react-router-dom";
import { Blog, FourOhFour, Home, Setting } from "../pages";
import { MainLayout } from "../layouts";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/settings',
                element: <Setting />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '*',
                element: <FourOhFour />
            }
        ]
    }
]);

export { Router as default }