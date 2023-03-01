import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import { Listing } from './components/Listing';
import Login from './components/Login';

export const CustomRoutes = () => {
    return ([
        <Route path='/' element={<Homepage/>}/>,
        <Route path='/login' element={<Login/>}/>,
        <Route path='/listing' element={<Listing/>}/>,
    ])
}