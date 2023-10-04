import { AuthContext } from '@auth/context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const dataContext = useContext(AuthContext);
  if(!dataContext) throw new Error('No context data initialized');
  const {authState, login} = dataContext;

  const navigate = useNavigate();

  const onLogin = () => {
    login();

    const lastPathSrc = localStorage.getItem('lastPath');
    navigate(lastPathSrc ?? '/marvel');
  }


  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>

      <button 
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
      <pre>
        {
          JSON.stringify(authState, null, 3)
        }
      </pre>
    </div>
  )
}
