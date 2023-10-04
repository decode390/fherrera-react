import { createContext } from 'react';
import { AuthState } from "@auth/models/Reducer";

export interface AuthContextState {
  login: () => void,
  logout: () => void,
  authState: AuthState
};

export const AuthContext = 
  createContext<AuthContextState | undefined>(undefined);
