import '@testing-library/jest-dom';

import { AuthActions, AuthState } from '@auth/models/Reducer';
import { authReducer } from '@auth/context';
import { ActionReducerModel } from '@/shared/models/Reducer';

describe('test in authReducer', () => {
  const authInitialState: AuthState = {
    logged: false,
    name: ''
  };


  test('should be load default state', () => {
    const newState = authReducer(authInitialState, null);
    expect(newState).toBe(authInitialState);
  });


  test('should be login with required name', () => {
    const userName = 'Prueba1';

    const action: ActionReducerModel<AuthActions> = {
      type: AuthActions.Login,
      payload: userName
    };
    const newState = authReducer(authInitialState, action);
    expect(newState).toEqual({ logged: true, name: userName});
  });


  test('should be logout and clear name', () => {
    const action: ActionReducerModel<AuthActions> = {
      type: AuthActions.Logout,
    };
    const newState = authReducer({logged: true, name: 'Test'}, action);
    expect(newState).toEqual({ logged: false, name: ''});
  });
});
