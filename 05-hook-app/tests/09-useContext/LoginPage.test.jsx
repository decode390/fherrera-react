import {act, fireEvent, render, renderHook, screen, waitFor} from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { useState } from 'react';

describe('test in LoginPage', () => {

  const user = {
    id: 1,
    name: 'Miguel'
  };
  
  test('should be show the component without user', () => {
    render(
      <UserContext.Provider value={{user: null}}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preElement = screen.getByLabelText('pre');
    expect(preElement.innerHTML).toBe('null')

  });


  test('should be show the component with user', async() => {
    const { result } = renderHook(() => useState({}));

    render(
      <UserContext.Provider 
        value={{user: result.current[0], setUser: result.current[1]}}
      >
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button)

    expect(result.current[0]).toEqual(
      { id: '123', name: 'Miguel', email: 'email@email.com' }
    )
  });
})

