import React from 'react';

import { useContextApp } from '../Context';
import AppRoutesAplication from './app.routes';
import AuthRoutesAplication from './auth.routes';

const RoutesAplication = () => {
  const { user } = useContextApp();

  console.log(user);
  return (
    <>
      {user === undefined ? <AuthRoutesAplication/> : <AppRoutesAplication/>}
    </>
  );
};

export default RoutesAplication;
