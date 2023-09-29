import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const {user, setUser} = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <button 
        className="btn btn-primary"
        onClick={()=>setUser({id:'123',name:'Miguel',email:'email@email.com'})}
      >
        Set user
      </button>

      <pre>
        {
          JSON.stringify(user, null, 3)
        }
      </pre>
    </>
  )
}
