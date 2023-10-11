import { ActionReducerModel } from "@/shared/models/Reducer";
import { AuthActions, AuthState } from "@auth/models/Reducer";


export const authReducer = 
( state: AuthState, action: ActionReducerModel<AuthActions> | null ): AuthState => 
{
  if (!action) return state;

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
