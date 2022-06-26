import { ReactNode } from 'react';
import {
  Navigate,
} from 'react-router-dom';

import { useContextApp, User } from '../Context';

interface IRoute{
  children: ReactNode;
  redirectPath: string;
  user?: User;
}

// eslint-disable-next-line max-len
const PublidRoute = ({ children, redirectPath, user }: IRoute) => (user ? <>{children}</> : <Navigate to={redirectPath}/>);

export default PublidRoute;
