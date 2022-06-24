import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Signup from '../pages/Signup';
import Welcome from '../pages/Welcome';

const AuthRoutesAplication = () => (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
);

export default AuthRoutesAplication;
