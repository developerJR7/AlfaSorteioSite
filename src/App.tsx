import { useEffect } from 'react'
import { Routes } from './routes'
import { AuthRoutes } from './routes/AuthRoutes'

function App() {
  //const { isAuthenticated, checkUserIsAuthenticated } = useAdm()

  //useEffect(() => {
  // checkUserIsAuthenticated()
  // }, [])

  return (
    <>
      {/*{isAuthenticated === true && <Routes />}
      {isAuthenticated === false && <AuthRoutes />}*/}
      <AuthRoutes />
    </>
  )
}

export default App
