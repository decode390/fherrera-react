import { RouteObject } from 'react-router-dom';
import authRoutes from '@/auth/authRoutes';
import journalRoutes from '@/journal/journalRoutes';
import {AuthLayout} from '@/auth/layout/AuthLayout'
import { JournalLayout } from '@/journal/layout/JournalLayout';

const routes:RouteObject[] = [
  {
    path: 'auth',
    element: <AuthLayout/>,
    children: authRoutes
  },
  {
    path: '*',
    element: <JournalLayout/>,
    children: journalRoutes
  },
];

export default routes;
