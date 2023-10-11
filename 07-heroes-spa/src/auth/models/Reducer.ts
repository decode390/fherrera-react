
export enum AuthActions {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
}

export class AuthState {
  public static fromObj = (obj: {[key: string]: any}) => {
    return new AuthState(
      obj['logged'] ?? false,
      obj['name'] ?? '',
    );
  }

  constructor(
    public logged: boolean = false,
    public name: string = ''
  ) {}
}

export const AuthInitialState: AuthState = {
  logged: false,
  name: ''
}
