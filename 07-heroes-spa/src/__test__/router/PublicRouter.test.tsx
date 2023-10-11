import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks();

import { AuthContext, AuthContextState } from '@/auth/context';
import { PrivateRouter, PublicRouter } from '@/router';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('test in Public Router', () => {
  const routes = [
    {
      path: '/login',
      element: <PublicRouter><h1>Public</h1></PublicRouter>
    },
    {
      path: '/marvel',
      element: <PrivateRouter><h1>Private</h1></PrivateRouter>
    },
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: ["/login"],
    initialIndex: 1
  });

  test('should be allow if user is unlogged', () => {
    const authContextState: AuthContextState = {
      authState: {logged: false, name: ''},
      login: () => {},
      logout: () => {},
    }

    render(
      <AuthContext.Provider value={authContextState}>
        <RouterProvider router={router}/>
      </AuthContext.Provider>
    );

    expect(screen.getByRole('heading').innerHTML).toBe('Public');
  });


  test('should be redirect if user is logged', async () => {

    const authContextState: AuthContextState = {
      authState: {logged: true, name: 'Prueba'},
      login: () => {},
      logout: () => {},
    }

    render(
      <AuthContext.Provider value={authContextState}>
        <RouterProvider router={router}/>
      </AuthContext.Provider>
    );

    expect(screen.getByRole('heading').innerHTML).toBe('Private');
  });

});
