import {Navigate, createBrowserRouter} from 'react-router-dom';
import { MainApp, HomePage, LoginPage, AboutPage } from './09-useContext';
import ErrorPage from './error-page';

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "about",
        element: <AboutPage/>,
      },
      {
        path: "/*",
        element: <Navigate to="/login"/>,
      },

    ]
  },
]);
