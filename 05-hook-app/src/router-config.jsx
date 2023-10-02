import {Navigate, createBrowserRouter} from 'react-router-dom';
import { MainApp, HomePage, LoginPage, AboutPage } from './09-useContext';

export const routerConfig = [
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
];
