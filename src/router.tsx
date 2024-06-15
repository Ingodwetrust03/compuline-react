import {createBrowserRouter} from "react-router-dom";
import React from "react";
import {Layout} from "./layouts/Layout";
import {Main} from "./pages/Main";
import {About} from "./pages/About";
import {Products} from "./pages/Products";
import {Vendors} from "./pages/Vendors";
import {Contacts} from "./pages/Contacts";
import {NotFound} from "./pages/404";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {path: '/', element: <Main />},
            {path: '/#formSection', element: <Main />},
            {path: '/about', element: <About />},
            {path: '/products', element: <Products />},
            {path: '/partners', element: <Vendors />},
            {path: '/contacts', element: <Contacts />},
            {path: '*', element: <NotFound />}
        ],
    },
    {
        path: '*',
        element: <NotFound />
    }

], {basename:'/compuline-react'})