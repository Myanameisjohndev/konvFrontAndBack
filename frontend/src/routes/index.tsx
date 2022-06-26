/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Children, ReactNode, useEffect } from 'react';
import {
  BrowserRouter, Routes, Route, useNavigate, Navigate,
} from 'react-router-dom';

import { useContextApp } from '../Context';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Signup from '../pages/Signup';
import Welcome from '../pages/Welcome';
import Private from './private';

interface IRoute{
  children: ReactNode;
  redirectTo: string;
}

const AppRoutesAplication = () => {
  const { user } = useContextApp();
  // @ts-ignore
  const PrivateRoute = ({ children, redirectTo }) => {
    const isAuthenticated = localStorage.getItem('token') !== null;
    console.log('isAuth: ', isAuthenticated);
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  };
  // @ts-ignore
  const Public = ({ children, redirectTo }) => {
    const isAuthenticated = localStorage.getItem('token') !== null;
    console.log('isAuth: ', isAuthenticated);
    return !isAuthenticated ? children : <Navigate to={redirectTo} />;
  };

  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="/dashboard"
          element={
            <PrivateRoute redirectTo="/login">
              <Dashboard />
            </PrivateRoute>
          }
        />
            <Route path="/login" element={
              <Public redirectTo="/dashboard">
                <Login />
              </Public>
            }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutesAplication;
