import React, { useEffect } from 'react'
import { RotasPublicas } from './routes/RotasPublicas'
import { useAlfa } from './contexts/UserContent'
import { RotasPrivadas } from './routes/RotasPrivadas'

const App: React.FC = () => {
  const { checkUserIsAuthenticated, isAuthenticated } = useAlfa()

  useEffect(() => {
    console.log(isAuthenticated)
    checkUserIsAuthenticated()
  }, [])

  return (
    <>
      {isAuthenticated === true && <RotasPrivadas />}
      {isAuthenticated === false && <RotasPublicas />}
    </>
  )
}

export default App
