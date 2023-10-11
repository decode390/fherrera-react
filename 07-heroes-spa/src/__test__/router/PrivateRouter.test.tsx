import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks();

import { AuthContext, AuthContextState } from '@/auth/context';
import { PrivateRouter } from '@/router';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('test in Public Router', () => {

  const routes = [
    {
      path: '/marvel',
      element: <PrivateRouter><h1>Private</h1></PrivateRouter>
    },
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: ["/marvel"],
    initialIndex: 1
  });


  test('should be allow if user is logged', () => {
    Storage.prototype.setItem = jest.fn();

    const authContextState: AuthContextState = {
      authState: {logged: true, name: 'Test'},
      login: () => {},
      logout: () => {},
    }

    render(
      <AuthContext.Provider value={authContextState}>
        <RouterProvider router={router}/>
      </AuthContext.Provider>
    );

    expect(screen.getByRole('heading').innerHTML).toBe('Private');
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });

});
