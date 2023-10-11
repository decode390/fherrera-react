import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks();

import { fireEvent, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { SearchPage } from "@heroes/pages";

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}));


describe('Test in SearchPage', () => {

  const routes = [
    {
      path: '/search',
      element: <SearchPage/>
    },
  ];

  beforeAll(()=> jest.clearAllMocks());

  test('should be show correctly with default values', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/search"],
    });
    const container = render(<RouterProvider router={router}/>);
    expect(container).toMatchSnapshot();
  });


  test('should be show Batman and input with query parameter value', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/search?q=batman"],
    });
    render(<RouterProvider router={router}/>);

    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputElement.value).toBe('batman');

    const noHeroElement = screen.getByLabelText('no-hero-alert');
    expect(noHeroElement.style.display).toBe('none');
  });


  test('should be show error if not found heroe', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/search?q=batman123123"],
    });
    render(<RouterProvider router={router}/>);

    const noHeroElement = screen.getByLabelText('no-hero-alert');
    expect(noHeroElement.style.display).toBe('');
  });


  test('should be call navigate to new page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/search"],
    });
    render(<RouterProvider router={router}/>);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, {target: {value: 'batman'}});

    const formElement = screen.getByLabelText('search');
    fireEvent.submit(formElement);

    expect(mockedNavigate).toHaveBeenCalledWith('?q=batman');
  });

});
