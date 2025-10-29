import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import HomePage from "../pages/HomePage/HomePage";
import MyBookings from './../pages/MyBookings/MyBookings';
import Blogs from './../pages/Blogs/Blogs';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/',
                Component: HomePage
            },
            {
                path: 'my-bookings',
                Component: MyBookings
            },
            {
                path: 'blogs',
                Component: Blogs
            },
            {
                path: '*',
                element: <div>
                    <title>404</title>
                    <h1 className="text-7xl font-extrabold text-center">404</h1>
                </div>
            }
        ]
    },
]);