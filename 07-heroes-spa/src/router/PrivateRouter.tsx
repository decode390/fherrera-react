import { AuthContext } from '@/auth/context';
import { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRouter = ({children}: any) => {
  const dataContext = useContext(AuthContext);
  if (!dataContext) throw new Error('No context data initialized');
  const {authState} = dataContext;

  const location = useLocation();
  useEffect(() => {
    const {pathname, search} = location;
    localStorage.setItem('lastPath', `${pathname}${search}`)
  }, [location]);

  return (authState.logged)
    ? <>{ children }</>
    : <Navigate to={'/login'}/>
  
}
