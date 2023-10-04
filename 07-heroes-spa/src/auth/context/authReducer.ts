import { ActionReducerModel } from "@/shared/models/Reducer";
import { AuthActions, AuthState } from "@auth/models/Reducer";


export const authReducer = 
( state: AuthState, action: ActionReducerModel<AuthActions> ): AuthState => 
{
  switch (action.type) {
    case AuthActions.Login:
      return {
        ...state,
        logged: true,
        name: action.payload
      }

    case AuthActions.Logout:
      return {
        name: '',
        logged: false,
      }

    default:
      return state;
  }
}
