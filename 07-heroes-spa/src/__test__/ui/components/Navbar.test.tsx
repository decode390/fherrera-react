import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks();

import { AuthContext, AuthContextState } from '@/auth/context';
import { Navbar } from '@/ui/components';
import { PrivateRouter, PublicRouter } from '@/router';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

const mockedUseNavigate = jest.fn(v=>v);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}));

describe('test in Navbar component', () => {
  const authContextState: AuthContextState = {
    authState: {logged: true, name: 'Test'},
    login: () => {},
    logout: jest.fn(),
  };

  const routes = [
    {
      path: '/login',
      element: <PublicRouter><h1>Login</h1></PublicRouter>
    },
    {
      path: '/marvel',
      element: <PrivateRouter><Navbar/></PrivateRouter>
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/marvel"],
    initialIndex: 1
  });

  beforeAll(() => jest.clearAllMocks());


  test('should be show navbar if is logged and called navigate', () => {

    render(
      <AuthContext.Provider value={authContextState}>
        <RouterProvider router={router}/>
      </AuthContext.Provider>
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(authContextState.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
  });
});
