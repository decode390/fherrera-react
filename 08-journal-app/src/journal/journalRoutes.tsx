import { Navigate, RouteObject } from 'react-router-dom';
import { JournalPage } from '@/journal/pages/JournalPage';

const routes:RouteObject[] = [
  {
    path: '',
    element: <JournalPage />
  },
  {
    path: '*',
    element: <Navigate to={'./'} />
  },
];

export default routes;
