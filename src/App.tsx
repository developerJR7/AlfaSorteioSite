import React, { useEffect } from 'react'
import { useAlfa } from './contexts/UserContent'

import { RotasPublicas } from './routes/RotasPublicas'

const App: React.FC = () => {
  const { checkUserIsAuthenticated, isAuthenticated } = useAlfa()

  useEffect(() => {
    checkUserIsAuthenticated()
  }, [])

  return <>{isAuthenticated === false && <RotasPublicas />}</>
}

export default App
