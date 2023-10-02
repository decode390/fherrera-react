import {render, screen} from '@testing-library/react'
import { HomePage } from '../../src/09-useContext/HomePage'
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('test in HomePage', () => {

  const user = {
    id: 1,
    name: 'Miguel'
  };
  
  test('should be show the component without user', () => {
    render(
      <UserContext.Provider value={{user: null}}>
        <HomePage />
      </UserContext.Provider>
    );

    const preElement = screen.getByLabelText('pre');
    expect(preElement.innerHTML).toBe('null')

  });


  test('should be show the component with user', () => {
    render(
      <UserContext.Provider value={{user}}>
        <HomePage />
      </UserContext.Provider>
    );

    const preElement = screen.getByLabelText('pre');
    expect(preElement.innerHTML).toEqual(JSON.stringify(user, null, 3));

  });
})
