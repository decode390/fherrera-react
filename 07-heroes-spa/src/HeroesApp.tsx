import { AuthProvider } from "./auth/context"

export const HeroesApp = ({children}: any) => {
  return (
    <>
      <AuthProvider>
        <h1>HeroesApp</h1>
        { children }
      </AuthProvider>
    </>
  )
}
