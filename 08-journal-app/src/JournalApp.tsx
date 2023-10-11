import routes from '@/router/appRoutes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppTheme } from '@/theme';

const router = createBrowserRouter(routes);

const JournalApp = () => {
  return (
    <AppTheme>
      <RouterProvider router={router}/>
    </AppTheme>
  );
}

export default JournalApp;
