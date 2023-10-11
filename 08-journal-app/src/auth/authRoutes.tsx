import { Navigate, RouteObject } from 'react-router-dom';
import { LoginPage, RegisterPage } from '@/auth/pages';

const routes:RouteObject[] = [
  {
    path: '',
    element: <Navigate to={'login'}/>
  },
  {
    path: 'login',
    element: <LoginPage/>
  },
  {
    path: 'register',
    element: <RegisterPage/>
  },
  {
    path: '*',
    element: <Navigate to={'login'}/>
  },
];

export default routes;
