import { useEffect, useReducer } from "react";
import { AuthActions, AuthInitialState, AuthState } from "@auth/models/Reducer";
import { authReducer, AuthContext } from ".";

const init = () => {
  const authStoragedStr = localStorage.getItem('auth');
  if (!authStoragedStr) return AuthInitialState;
  const authStoraged = AuthState.fromObj(JSON.parse(authStoragedStr)); 
  return  authStoraged;
}

export const AuthProvider = ({children}: any) => {
  const [authState, dispatchAuth] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(authState));
  }, [authState])

  const login = () => {
    dispatchAuth({
      type: AuthActions.Login,
      payload: 'Usuario prueba'
    });
  }

  const logout = () => {
    dispatchAuth({
      type: AuthActions.Logout,
    });
  }


  return (
    <AuthContext.Provider 
      value={{authState, login, logout}}
    >
      { children }
    </AuthContext.Provider>
  )
}
