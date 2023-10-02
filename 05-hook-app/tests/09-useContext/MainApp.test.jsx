import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routerConfig } from '../../src/router-config';

describe('test in MainApp', () => {
  
  test('should be show home page', () => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ["/"]
    })

    render(<RouterProvider router={router}/>)
    expect(screen.getByText('HomePage')).toBeTruthy();
  });


  test('should be show login page', () => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ["/login"]
    })

    render(<RouterProvider router={router}/>)
    expect(screen.getByText('LoginPage')).toBeTruthy();
  });

});
