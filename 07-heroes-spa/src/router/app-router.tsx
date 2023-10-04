import { DcPage, HeroPage, MarvelPage, SearchPage } from '@heroes/pages';
import { LoginPage } from '@auth/pages';
import { Navigate } from 'react-router-dom';
import { NoNavLayout, MainLayout } from '@/ui/layouts';
import { PublicRouter, PrivateRouter } from '.';

export const appRouter = [
  {
    path: "login",
    element: <PublicRouter><NoNavLayout/></PublicRouter>,
    children: [
      {index: true, element: <LoginPage />},
    ],
  },
  {
    path: "*",
    element: <PrivateRouter><MainLayout/></PrivateRouter>,
    children: [
      {path: "marvel", element: <MarvelPage />},
      {path: "dc", element: <DcPage />},
      {path: "search", element: <SearchPage />},
      {path: "hero/:heroId", element: <HeroPage />},
      {path: "*", element: <Navigate to={"marvel"}/>},
    ],
  }
];
