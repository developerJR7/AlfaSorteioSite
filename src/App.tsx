import React, { useEffect } from 'react'
import { useAlfa } from './contexts/UserContent'
import { RotasPrivadas } from './routes/RotasPrivadas'
import { RotasPublicas } from './routes/RotasPublicas'

const App: React.FC = () => {
  const { checkUserIsAuthenticated, isAuthenticated } = useAlfa()

  useEffect(() => {
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
