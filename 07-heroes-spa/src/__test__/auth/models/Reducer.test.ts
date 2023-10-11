import { AuthActions, AuthInitialState, AuthState } from "@auth/models/Reducer";

describe('Test in Auth reducer models',() => {

  test('auth actions', () => {
    expect(AuthActions).toMatchInlineSnapshot(`
      {
        "Login": "[Auth] Login",
        "Logout": "[Auth] Logout",
      }
    `);
  });


  test('auth state', () => {
    const authState = 
      AuthState.fromObj(JSON.parse(`
        {
          "logged": true, 
          "name": "test" 
        }
      `));

    expect(authState).toEqual({logged: true, name: "test"});
    expect(authState instanceof AuthState).toBeTruthy();
  });


  test('auth initial state', () => {
    expect(AuthInitialState).toEqual({logged: false, name: ''});
  });
});
