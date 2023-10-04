import { AuthContext } from '@/auth/context';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

export const PublicRouter = ({children}: any) => {
  const dataContext = useContext(AuthContext);
  if (!dataContext) throw new Error('No context data initialized');
  const {authState} = dataContext;


  return (!authState.logged)
    ? <>{ children }</>
    : <Navigate to={'/marvel'}/>
  
}

