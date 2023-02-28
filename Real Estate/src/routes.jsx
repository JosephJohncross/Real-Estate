import React from 'react';
import { Route } from 'react-router-dom';

export const CustomRoutes = () => {
    return ([
            <Route
                path='/test'
                element={<>test</>}
            />,
            <Route
                path='/about'
                element={<>About Me</>}
            />,
        ])
}