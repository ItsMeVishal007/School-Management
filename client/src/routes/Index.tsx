import React from 'react';
import Login from '../Pages/auth/Login';
import Home from '../Pages/home/Index';
import About from '../Pages/home/About';

export const AllRoutes : {path:string, component: any}[] = [
    {
        path: "/login",
        component : Login
    },
    {
        path: "/home",
        component : Home
    },
    {
        path: "/about",
        component : About
    },
]